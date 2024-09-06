
// src/components/HackathonForm.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const levels = ['Easy', 'Medium', 'Hard'];

const HackathonForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    level: 'Easy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
      />
      <TextField
        label="Level"
        name="level"
        value={formData.level}
        onChange={handleChange}
        select
        fullWidth
        required
      >
        {levels.map((level) => (
          <MenuItem key={level} value={level}>
            {level}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default HackathonForm;
