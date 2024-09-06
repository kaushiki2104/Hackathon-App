import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const HackathonDetails = ({ hackathons }) => {
  const { id } = useParams();
  const hackathon = hackathons.find(h => h.id === Number(id));
  const navigate = useNavigate();

  if (!hackathon) return <div>Hackathon not found</div>;

  return (
    <div>
      <h1>{hackathon.name}</h1>
      <p>{hackathon.description}</p>
      <p>Start: {hackathon.startDate}</p>
      <p>End: {hackathon.endDate}</p>
      <Button onClick={() => navigate(`/edit/${hackathon.id}`)}>Edit</Button>
      <Button color="error" onClick={() => navigate('/')}>Delete</Button>
    </div>
  );
};

export default HackathonDetails;
