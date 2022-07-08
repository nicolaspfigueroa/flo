import React from 'react';
import Router from './Router';

// On this file you want to add shared behaviours or context providers to make them available to the whole app (redux provider, etc..)
const App: React.FC = () => {
  return <Router />;
}

export default App;
