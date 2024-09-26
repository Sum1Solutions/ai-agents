# AI Agents

AI Agents is a Next.js application that allows users to interact with AI-powered agents. These agents can simulate various roles in a medical setting, such as physicians, front desk staff, and certified nursing assistants (CNAs). The goal of this project was to help experience the capabilities of OpenAI's GPT models in a practical setting developing usable software solutions.

## Overview

This application demonstrates the integration of OpenAI's GPT models with a modern web application stack. It allows users to:

1. Create and manage AI agents with specific roles and tasks
2. Interact with these agents to generate responses based on their defined roles and tasks
3. View and manage multiple agents simultaneously

## Technology Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Next.js API routes
- **AI Integration**: OpenAI API
- **Containerization**: Docker

## Project Structure

The project follows a typical Next.js application structure:

```
ai-medical-project/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AgentForm.tsx
│   │   ├── AgentList.tsx
│   │   └── AgentDetail.tsx
│   └── types/
│       └── index.ts
├── public/
├── .env.local
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── Dockerfile
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine
- An OpenAI API key

### Running the Application

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ai-medical-project
   ```

2. Create a `.env.local` file in the project root and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your-openai-api-key-here
   ```

3. Build and run the Docker container:
   ```
   docker-compose up --build
   ```

4. Open your browser and navigate to `http://localhost:3000` to access the application.

## How It Works

1. **Agent Creation**: Users can create AI agents by specifying a name, role (physician, front desk, or CNA), and a specific task.

2. **Agent List**: Created agents are displayed in a list, allowing users to select and interact with them.

3. **Agent Interaction**: When an agent is selected, users can generate responses based on the agent's role and task.

4. **AI Integration**: The application uses the OpenAI API to generate contextual responses for each agent interaction.

## Component Breakdown

- `AgentForm`: Allows users to create new AI agents.
- `AgentList`: Displays all created agents and allows selection.
- `AgentDetail`: Shows details of a selected agent and facilitates interaction.
- `generate/route.ts`: API route that interfaces with the OpenAI API to generate responses.

## Docker Configuration

The application is containerized using Docker, which ensures consistency across different development and deployment environments.

- `Dockerfile`: Defines the container image for the application.
- `docker-compose.yml`: Orchestrates the container setup, including environment variables and port mapping.

## Development

To run the application in development mode:

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

Make sure to have the `.env.local` file set up with your OpenAI API key.

## Contributing

Contributions to improve the AI Agents project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## License

Apache License 2.0

---

Use As-Is -- like everything you get for free on the Internet. No warranty expressed or implied. Use at your own risk.