import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import App from './App';
import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <App />
      </PersistGate>
    </Provider>
  );
}
