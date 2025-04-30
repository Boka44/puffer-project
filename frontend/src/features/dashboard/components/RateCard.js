import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  minHeight: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: theme.palette.gradient.main,
  },
}));

const RateCard = ({ rate }) => {
  return (
    <StyledPaper elevation={3}>
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.875rem',
        }}
      >
        Latest Conversion Rate
      </Typography>
      <Typography 
        variant="h2" 
        component="div" 
        sx={{ 
          fontWeight: 700,
          background: (theme) => theme.palette.gradient.main,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          mb: 1,
        }}
      >
        {rate ? rate.toFixed(4) : 'N/A'}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ 
          mt: 1,
          letterSpacing: '0.05em',
        }}
      >
        pufETH/ETH
      </Typography>
    </StyledPaper>
  );
};

export default RateCard; 