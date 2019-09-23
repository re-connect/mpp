import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#54D69E',
      main: '#1ABD9C',
      dark: '#148F76',
      contrastText: '#fff',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
