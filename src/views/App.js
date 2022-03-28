import { ThemeProvider } from 'styled-components';
import AppProvider from '../AppContext';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'assets/Theme';

import Layout from 'components/atoms/Layout/Layout';
import { AppLogoBar } from 'components/atoms/AppLogoBar/AppLogoBar';
import { OneFinancialSystemData } from 'components/organisms/OneFinancialSystemData/OneFinancialSystemData';
import { Summary } from 'components/atoms/Summary/Summary';

function App() {

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AppLogoBar />
          <OneFinancialSystemData main systemNumber={0}/>
          <OneFinancialSystemData systemNumber={1}/>
          <OneFinancialSystemData systemNumber={2}/>
          <Summary />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
