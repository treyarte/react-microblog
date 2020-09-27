import React from 'react';
import Header from './Header';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
