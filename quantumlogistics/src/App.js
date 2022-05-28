import React from 'react'
import {Footer, Header, OurMission} from './containers';
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
