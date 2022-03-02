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
          <CompareToMainFinancialSystem title="bank keys" bankDetailsElementName="bankKey" />
          <CompareToMainFinancialSystem title="bank accounts"bankDetailsElementName="bankAccount" />
          <CompareToMainFinancialSystem title="iban" bankDetailsElementName="iban" />
          <CompareToMainFinancialSystem title="swifts" bankDetailsElementName="swift" />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
