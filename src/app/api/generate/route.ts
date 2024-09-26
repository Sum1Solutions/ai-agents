import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIError } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { agent } = await request.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error: {
          message:
            'OpenAI API key not configured. Please set it in the .env.local file.',
        },
      },
      { status: 500 }
    );
  }

  if (!agent) {
    return NextResponse.json(
      {
        error: {
          message: 'Agent information is missing in the request',
        },
      },
      { status: 400 }
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an AI ${agent.role} named ${agent.name}. Your task is: ${agent.task}. Provide a response that includes UI elements with simulated patient/practice data.`
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return NextResponse.json({ result: completion.choices[0].message.content });
  } catch (error) {
    const openAIError = error as OpenAIError;
    console.error(openAIError.response?.data || openAIError.message);
    return NextResponse.json(
      {
        error: {
          message: 'An error occurred during OpenAI API request',
        },
      },
      { status: 500 }
    );
  }
}
