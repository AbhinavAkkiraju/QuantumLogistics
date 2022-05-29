import React from 'react';
import { Header, OurMission, UseNow } from './containers';
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
  </div>
);

export default App;