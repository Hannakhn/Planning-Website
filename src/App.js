import React from 'react';
import './App.css';
import HomePageInfo from './components/HomePageInfo';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="homeImage">
        <NavbarComponent />
        <HomePageInfo />
      </div>
    </BrowserRouter>
  );
}


export default App;
