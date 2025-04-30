import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#874FFF', // Purple Puffer
      light: '#9B6FFF',
      dark: '#6E3FCC',
    },
    secondary: {
      main: '#41FF54', // Green Puffer
      light: '#65FF74',
      dark: '#34CC43',
    },
    background: {
      default: '#000000', // Black Puffer
      paper: '#111111',
    },
    text: {
      primary: '#FFFFFF', // White Puffer
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    gradient: {
      main: 'linear-gradient(90deg, #874FFF 0%, #36AFE2 50%, #41FF54 100%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#111111',
          borderRadius: 16,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1000px !important',
        },
      },
    },
  },
});

export default theme; 