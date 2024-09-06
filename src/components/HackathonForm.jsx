
import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Grid } from '@mui/material';

const HackathonFormModal = ({ open, onClose, onSave }) => {
  const [hackathon, setHackathon] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    level: 'easy',
    image: ''
  });

  const handleChange = (e) => {
    setHackathon({ ...hackathon, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(hackathon);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', width: 400 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Hackathon Name"
              name="name"
              value={hackathon.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={hackathon.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              value={hackathon.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="End Date"
              name="endDate"
              type="date"
              value={hackathon.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={hackathon.image}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save Hackathon
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default HackathonFormModal;
