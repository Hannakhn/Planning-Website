import React from 'react';
import './App.css';
import HomePageInfo from './components/HomePageInfo';
import HomeNavbarComponent from './components/HomeNavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}


export default App;
