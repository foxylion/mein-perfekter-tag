import { installStyles } from './config'; // Must be the first input, otherwise styleing may fail

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { FoodEmojiBackground } from './components/FoodEmojiBackground';
import { Header } from './components/header/Header';
import { PrintTable } from './components/print/PrintTable';
import { QuestionairePage } from './components/questionaire/QuestionairePage';

installStyles();

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App: React.FunctionComponent<{}> = () => {
  const [showPrintTable, setShowPrintTable] = useState<boolean>(false);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <FoodEmojiBackground />
        <Header onHiddenClick={() => setShowPrintTable(!showPrintTable)} />
        {!showPrintTable && <QuestionairePage />}
        {showPrintTable && <PrintTable />}
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
