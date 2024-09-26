export type AgentRole = 'physician' | 'front_desk' | 'cna';

export interface Agent {
  id: string;
  name: string;
  role: AgentRole;
  task: string;
}

export interface OpenAIError extends Error {
  response?: {
    status: number;
    data: any;
  };
}
