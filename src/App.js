import React from 'react';
import Header from './Header';
import Routes from './Routes';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
