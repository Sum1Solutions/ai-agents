'use client';

import { Agent } from '../types';

interface AgentListProps {
  agents: Agent[];
  onSelectAgent: (agent: Agent) => void;
}

const AgentList: React.FC<AgentListProps> = ({ agents, onSelectAgent }) => {
  return (
    <div className="space-y-2">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="p-4 border rounded cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectAgent(agent)}
        >
          <h2 className="text-lg font-bold">{agent.name}</h2>
          <p className="text-sm text-gray-600">Role: {agent.role}</p>
          <p className="text-sm text-gray-600">Task: {agent.task}</p>
        </div>
      ))}
    </div>
  );
};

export default AgentList;
