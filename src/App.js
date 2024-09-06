
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/HackathonDashboard';
import HackathonForm from './components/HackathonForm';
import HackathonDetails from './components/HackathonDetails';
import Header from './components/Header'; 

const App = () => {
  const [hackathons, setHackathons] = useState([]);

  const handleSave = (hackathon) => {
    setHackathons([...hackathons, { ...hackathon, id: Date.now() }]);
  };

  const handleEdit = (updatedHackathon) => {
    setHackathons(hackathons.map(h => h.id === updatedHackathon.id ? updatedHackathon : h));
  };

  const handleDelete = (id) => {
    setHackathons(hackathons.filter(h => h.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard hackathons={hackathons} onEdit={handleEdit} onDelete={handleDelete} />} />
        <Route path="/create" element={<HackathonForm onSave={handleSave} />} />
        <Route path="/edit/:id" element={<HackathonForm onSave={handleEdit} />} />
        <Route path="/hackathon/:id" element={<HackathonDetails hackathons={hackathons} />} />
      </Routes>
    </Router>
  );
};

export default App;
