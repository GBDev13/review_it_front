import { ThemeProvider } from 'styled-components';
import { StyledToast } from '../components/StyledToastContainer';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledToast />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
