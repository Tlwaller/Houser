import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';

//components
import Header from './Components/Header/Header';
import Routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    </HashRouter>
  );
}

export default App;
