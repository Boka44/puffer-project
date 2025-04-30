import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, CircularProgress, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRates } from './useRates';
import RateCard from './components/RateCard';
import ChartCard from './components/ChartCard';

const Dashboard = () => {
  const { rates, loading, error } = useRates();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        pufETH Conversion Rate Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <RateCard rate={rates[rates.length - 1]?.rate} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard data={rates} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 