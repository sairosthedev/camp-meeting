import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Testimonies: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Testimonies
        </Typography>
        <Typography variant="body1">
          This page will display testimonies from camp meeting attendees.
        </Typography>
      </Box>
    </Container>
  );
};

export default Testimonies; 