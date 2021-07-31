import React from 'react';
import './App.css';
import HomePageInfo from './components/HomePageInfo';
import HomeNavbarComponent from './components/HomeNavbarComponent';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="homeImage">
        <HomePageInfo />
      </div>
    </BrowserRouter>
  );
}


export default App;
