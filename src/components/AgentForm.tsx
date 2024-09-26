'use client';

import { useState } from 'react';
import { Agent, AgentRole } from '../types';

interface AgentFormProps {
  onAddAgent: (agent: Agent) => void;
}

const AgentForm: React.FC<AgentFormProps> = ({ onAddAgent }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<AgentRole>('physician');
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAgent: Agent = {
      id: Date.now().toString(),
      name,
      role,
      task,
    };
    onAddAgent(newAgent);
    setName('');
    setRole('physician');
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Agent Name
        </label>
        <input
          type="text"
          className="mt-1 p-2 block w-full border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Agent Role
        </label>
        <select
          className="mt-1 p-2 block w-full border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value as AgentRole)}
        >
          <option value="physician">Family Physician</option>
          <option value="front_desk">Front Desk Agent</option>
          <option value="cna">Certified Nursing Assistant</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Task
        </label>
        <textarea
          className="mt-1 p-2 block w-full border rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded"
      >
        Add Agent
      </button>
    </form>
  );
};

export default AgentForm;
