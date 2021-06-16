import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { StyledToast } from '../components/StyledToastContainer';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import 'react-toastify/dist/ReactToastify.min.css';
import store from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StyledToast />
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
