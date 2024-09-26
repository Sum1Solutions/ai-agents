'use client';

import { useState } from 'react';
import AgentForm from '../components/AgentForm';
import AgentList from '../components/AgentList';
import AgentDetail from '../components/AgentDetail';
import { Agent } from '../types';

export default function HomePage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const handleAddAgent = (agent: Agent) => {
    setAgents((prevAgents) => [...prevAgents, agent]);
  };

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">AI Medical Agents</h1>
      <AgentForm onAddAgent={handleAddAgent} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgentList agents={agents} onSelectAgent={handleSelectAgent} />
        {selectedAgent && <AgentDetail agent={selectedAgent} />}
      </div>
    </div>
  );
}
