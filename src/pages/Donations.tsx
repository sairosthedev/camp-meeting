import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Donations: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Donations
        </Typography>
        <Typography variant="body1">
          Manage and track donations for the camp meeting.
        </Typography>
      </Box>
    </Container>
  );
};

export default Donations; 