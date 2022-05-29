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
            </div>
        </div>
    )
}

export default UseNow