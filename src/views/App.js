import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

import Layout from 'components/atoms/Layout/Layout';
import { TitleBar } from 'components/atoms/TitleBar/TitleBar';
import { BankKeyAnalitics } from 'components/organisms/BankKeyAnalitics/BankKeyAnalitics';
import { MainFinancialSystemBoxStyle } from 'components/organisms/MainFinancialSystemBox/MainFinancialSystemBox.style';

function App() {
  
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TitleBar />
          <MainFinancialSystemBoxStyle />
          <BankKeyAnalitics />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
