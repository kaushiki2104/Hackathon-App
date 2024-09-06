

// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import HackathonCard from './HackathonCard';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const Dashboard = ({ hackathons, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [sortedHackathons, setSortedHackathons] = useState([...hackathons]);

  useEffect(() => {
    let filtered = [...hackathons];
    if (searchTerm) {
      filtered = filtered.filter((hack) =>
        hack.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (levelFilter) {
      filtered = filtered.filter((hack) => hack.level === levelFilter);
    }
    setSortedHackathons(filtered);
  }, [hackathons, searchTerm, levelFilter]);

  return (
    <div>
      <TextField
        label="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select
        value={levelFilter}
        onChange={(e) => setLevelFilter(e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All Levels</MenuItem>
        <MenuItem value="Easy">Easy</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Hard">Hard</MenuItem>
      </Select>
      <Button onClick={() => setSortedHackathons([...sortedHackathons].reverse())}>
        Sort by Date
      </Button>
      {sortedHackathons.map((hackathon) => (
        <HackathonCard
          key={hackathon.id}
          hackathon={hackathon}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Dashboard;
