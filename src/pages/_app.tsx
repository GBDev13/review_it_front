import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { lighten } from 'polished';
import NextNProgress from 'nextjs-progressbar';
import { StyledToast } from '../components/StyledToastContainer';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import 'react-toastify/dist/ReactToastify.min.css';
import store from '../store/configureStore';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NextNProgress
            color={lighten(0.08, theme.colors.primary)}
            startPosition={0.3}
            stopDelayMs={200}
            height={6}
            showOnShallow
          />

          <StyledToast />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
