'use client';

import { useState } from 'react';
import { Agent } from '../types';

interface AgentDetailProps {
  agent: Agent;
}

const AgentDetail: React.FC<AgentDetailProps> = ({ agent }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ agent }),
      });
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.error.message);
      }
      setResponse(data.result);
    } catch (error) {
      console.error(error);
      setResponse('Error generating response');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded space-y-4">
      <h2 className="text-xl font-bold">{agent.name}</h2>
      <p>
        <strong>Role:</strong> {agent.role}
      </p>
      <p>
        <strong>Task:</strong> {agent.task}
      </p>
      <button
        onClick={handleGenerate}
        className="py-2 px-4 bg-green-600 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Response'}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AgentDetail;
