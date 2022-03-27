import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

import Layout from 'components/atoms/Layout/Layout';
import { MainFinancialSystem } from 'components/organisms/MainFinancialSystem/MainFinancialSystem';
import { AppLogoBar } from 'components/atoms/AppLogoBar/AppLogoBar';
import { Abc } from 'abc';

function App() {

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Abc />
          <AppLogoBar />
          <MainFinancialSystem main documentNumber={0}/>
          <MainFinancialSystem documentNumber={1}/>
          <MainFinancialSystem documentNumber={2}/>
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
