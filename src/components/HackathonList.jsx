// src/components/HackathonList.jsx
import React from 'react';
import HackathonCard from './components/HackathonCard';
import { Grid } from '@mui/material';

const HackathonList = ({ hackathons }) => {
  return (
    <Grid container spacing={3}>
      {hackathons.map((hackathon, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <HackathonCard hackathon={hackathon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HackathonList;
