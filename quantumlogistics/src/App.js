import React from 'react'
import './App.css';
import {Footer, Header, OurMission, UseNow} from './containers';
import {Article, Brand, CTA, Feature, Navbar} from './components';

const App = () => {
    return (
        <div className="App">
            <div className="background">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Feature />
            <CTA />
            <OurMission />
            <Footer />
        </div>
    )
}

export default App
