import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';
import AppProvider from './hooks';
import { GlobalStyle } from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <Header />
          <Routes />
        </AppProvider>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
