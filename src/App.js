import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AppContainer from './components/AppContainer';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={AppContainer} />
    </BrowserRouter>
  );
}

export default App;
