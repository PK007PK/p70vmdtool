import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

import Layout from 'components/atoms/Layout/Layout';
import { TitleBar } from 'components/atoms/TitleBar/TitleBar';
import { MainFinancialSystem } from 'components/organisms/MainFinancialSystem/MainFinancialSystem';

function App() {

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <TitleBar />
          <MainFinancialSystem main documentNumber={0}/>
          <MainFinancialSystem documentNumber={1}/>
          <MainFinancialSystem documentNumber={2}/>
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
