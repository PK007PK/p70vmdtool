import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import Layout from 'components/Layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';
import { TitleBar } from 'components/TitleBar/TitleBar';
import { BankRecordBox } from 'components/BankRecordBox/BankRecordBox';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TitleBar />
          <BankRecordBox i={0}/>
          {/* <MainBankDetails /> */}
          {/* <BlockOfButtons name={"Bank key"}/>
          <BlockOfButtons name={"Account number"}/>
          <BlockOfButtons name={"IBAN"}/>
          <BlockOfButtons name={"SWIFT"}/> */}
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
