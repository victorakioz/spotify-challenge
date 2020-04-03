import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import store from './redux';


export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>      
    </>
  )
}