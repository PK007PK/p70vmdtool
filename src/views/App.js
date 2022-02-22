import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';


import Layout from 'components/atoms/Layout/Layout';
import { TitleBar } from 'components/atoms/TitleBar/TitleBar';
import { BankRecordBox } from 'components/organisms/BankRecordBox/BankRecordBox';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TitleBar />
          <BankRecordBox i={0}/>
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
