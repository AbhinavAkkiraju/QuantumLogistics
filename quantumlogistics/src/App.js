import React from 'react';
import { Header, OurMission, UseNow, Footer } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <UseNow/>
    <OurMission/>
    <Footer/>
  </div>
);

export default App;