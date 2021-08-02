import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from 'config/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'components/styles';
import Main from 'components/pages/Main';
import { PersistGate } from 'redux-persist/es/integration/react';
import { configureAxios } from 'apis';

configureAxios();

ReactDOM.render(
  <Provider store={configStore.store}>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={configStore.persistor}>
          <Main />
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
