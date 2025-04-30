import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: 400,
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          p: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          {new Date(label).toLocaleString()}
        </Typography>
        <Typography variant="h6" sx={{ 
          background: (theme) => theme.palette.gradient.main,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 600,
        }}>
          {payload[0].value.toFixed(4)}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          pufETH/ETH
        </Typography>
      </Box>
    );
  }
  return null;
};

const ChartCard = ({ data }) => {
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
          mb: 3,
        }}
      >
        Historical Conversion Rates
      </Typography>
      <Box sx={{ width: '100%', height: 'calc(100% - 60px)' }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis 
              dataKey="timestamp" 
              tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
              stroke="rgba(255,255,255,0.1)"
            />
            <YAxis 
              tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
              tickFormatter={(value) => value.toFixed(4)}
              stroke="rgba(255,255,255,0.1)"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="rate" 
              stroke="url(#colorGradient)" 
              strokeWidth={2}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: '#874FFF',
                strokeWidth: 2,
                stroke: '#FFFFFF',
              }}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#874FFF" />
                <stop offset="50%" stopColor="#36AFE2" />
                <stop offset="100%" stopColor="#41FF54" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </StyledPaper>
  );
};

export default ChartCard; 