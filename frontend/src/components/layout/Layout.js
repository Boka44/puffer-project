import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import PufferLogo from '../../assets/images/On Black_Horizontal.png';
import PufferLST from '../../assets/images/Puffer LST@2x copy.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
}));

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
  objectFit: 'contain',
});

const SmallLogo = styled('img')({
  height: 24,
  marginRight: 8,
  objectFit: 'contain',
  verticalAlign: 'middle',
  display: 'inline-block',
});

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  marginTop: 64,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Logo src={PufferLogo} alt="Puffer" />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                background: (theme) => theme.palette.gradient.main,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SmallLogo src={PufferLST} alt="pufETH" />
              pufETH Tracker
            </Typography>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <MainContent>
        <Container 
          maxWidth={false} 
          sx={{ 
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          {children}
        </Container>
      </MainContent>
    </Box>
  );
};

export default Layout; 