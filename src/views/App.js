import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';


import Layout from 'components/atoms/Layout/Layout';
import { TitleBar } from 'components/atoms/TitleBar/TitleBar';
import { BankRecordBox } from 'components/organisms/BankRecordBox/BankRecordBox';
import { CompareToMainFinancialSystem } from 'components/organisms/CompareToMainFinancialSystem/CompareToMainFinancialSystem';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TitleBar />
          <BankRecordBox />
          <CompareToMainFinancialSystem title="bank keys" element="bankKey" />
          <CompareToMainFinancialSystem title="bank accounts" element="bankAccount" />
          <CompareToMainFinancialSystem title="iban" element="iban" />
          <CompareToMainFinancialSystem title="swifts" element="swift" />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
