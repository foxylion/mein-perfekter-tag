import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { install as installStyles, ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';

installStyles();

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App: React.FunctionComponent<{}> = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
