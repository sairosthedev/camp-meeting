import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Equipment: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Equipment
        </Typography>
        <Typography variant="body1">
          Manage and track equipment for the camp meeting.
        </Typography>
      </Box>
    </Container>
  );
};

export default Equipment; 