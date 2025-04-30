import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { fetchRates } from '../store/slices/ratesSlice';
import RateCard from '../features/dashboard/components/RateCard';
import ChartCard from '../features/dashboard/components/ChartCard';
import PufferLST from '../assets/images/Puffer LST@2x copy.png';

const SmallLogo = styled('img')({
  height: 32,
  marginRight: 12,
  objectFit: 'contain',
  verticalAlign: 'middle',
  display: 'inline-block',
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: rates, loading, error } = useSelector((state) => state.rates);

  useEffect(() => {
    dispatch(fetchRates());
    const interval = setInterval(() => {
      dispatch(fetchRates());
    }, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, [dispatch]);

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
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            background: (theme) => theme.palette.gradient.main,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          <SmallLogo src={PufferLST} alt="pufETH" />
          pufETH Conversion Rate Dashboard
        </Typography>
      </Box>

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