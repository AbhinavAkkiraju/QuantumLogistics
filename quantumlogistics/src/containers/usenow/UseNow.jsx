import React from 'react';
import {Feature} from '../../components';
import './UseNow.css';

const UseNow = () => {
    return (
        <div className="usenow section-margin" id="usenow">
            <div className="usenow-feature">
                <Feature title="USE NOW"/>
            </div>
            <div className="usenow-input">
                <input className='startinglocation' type="text" placeholder='Enter Starting Location (City)...'/>
                <input className='destinationlocation' type="text" placeholder='Enter Destination (City)...'/>
                <input className='weight' type="text" placeholder='Enter Weight of Cargo (Tons)...'/>
                <input className='economicpreference' type="text" placeholder='Enter Economic Preference (1-100)...'/>
                <input className='speedpreference' type="text" placeholder='Enter Speed Preference (1-100)...'/>
                <input className='carbonpreference' type="text" placeholder='Enter Carbon Preference (1-100)...'/>
                <button className='gradient__background'>GO</button>
            </div>
            <div className="usenow-output">
                <h1 className="truckdistance">Distance Travelled by Truck:</h1>
                <h1 className="aircraftdistance">Distance Travelled by Aircraft:</h1>
                <h1 className="boatdistance">Distance Travelled by Boat:</h1>
                <h1 className="traindistance">Distance Travelled by Train:</h1>
            </div>
        </div>
    )
}

export default UseNow