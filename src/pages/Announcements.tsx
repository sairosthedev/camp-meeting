import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Announcements: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Announcements
        </Typography>
        <Typography variant="body1">
          View and manage announcements for the camp meeting.
        </Typography>
      </Box>
    </Container>
  );
};

export default Announcements; 