import React, { Component, useRef } from 'react';
import { useState } from "react";
import { Feature } from '../../components';
import './UseNow.css';

export default class UseNow extends React.Component {
    state = {
        truck: null,
        air: null,
        boat: null,
        train: null,
        carbon: null,
        cost: null,
        time: null,
    }
    
    
    render() {
        let [startinglocation, setstartinglocation] = []//useState("");
        let [destinationlocation, setsestinationlocation] = []//useState("")
        let [weight, setweight] = []//useState("")
        let [ep, setep] = []//useState("")
        let [sp, setsp] = []//useState("")
        let [cp, setcp] = []//useState("")
    

        let that = this
        function handleSubmit(event) {

            event.preventDefault();
            fetch(`http://athesto-dev.ddns.net/?city1=${startinglocation}&city2=${destinationlocation}&ton=${weight}&ep=${ep}&cp=${cp}&sp=${sp}`,
                {
                    method: 'GET'
                }
            )
                .then(res => res.json())
                .then(json => {
                    that.setState({
                        truck: json.truck,
                        air: json.aircraft,
                        boat: json.boat,
                        carbon: json.co2,
                        cost: json.price,
                        train: json.train,
                        time: Math.round((parseFloat(json.time) * 100) / 100).toString(),
                    })
                })
        }
        return (
            <div className="usenow section-margin" id="usenow" >
                <div className="usenow-feature">
                    <Feature title="USE NOW" />
                </div>
                <div className='break'></div>
                <div className="usenow-input">
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => startinglocation = (e.target.value)} value={startinglocation} className='startinglocation' type="text" placeholder='Enter Starting Location (City)...' />
                        <input onChange={(e) => destinationlocation = (e.target.value)} value={destinationlocation} className='destinationlocation' type="text" placeholder='Enter Destination (City)...' />
                        <input onChange={(e) => weight = (e.target.value)} value={weight} className='weight' type="text" placeholder='Enter Weight of Cargo (Tons)...' />
                        <input onChange={(e) => ep = (e.target.value)} value={ep} className='economicpreference' type="text" placeholder='Enter Economic Preference (1-100)...' />
                        <input onChange={(e) => sp = (e.target.value)} value={sp} className='speedpreference' type="text" placeholder='Enter Speed Preference (1-100)...' />
                        <input onChange={(e) => cp = (e.target.value)} value={cp} className='carbonpreference' type="text" placeholder='Enter Carbon Preference (1-100)...' />
                        <input type="submit" className='gradient__background nopercent' value="GO" />
                    </form>
                </div>
                <div className="usenow-output">
                    <label className='truckdistance outlable'> Distance Travelled by Truck (km):
                        <input type="text" value={this.state.truck} className="startinglocation outtext" />
                    </label>
                    <label className='aircraftdistance outlable'> Distance Travelled by Aircraft (km):
                        <input type="text" value={this.state.air} className="startinglocation outtext" />
                    </label>
                    <label className='boatdistance outlable'> Distance Travelled by Boat (km):
                        <input type="text" value={this.state.boat} className="startinglocation outtext" />
                    </label>
                    <label className='traindistance outlable'> Distance Travelled by Train (km):
                        <input type="text" value={this.state.train} className="startinglocation outtext" />
                    </label>
                    <label className='traindistance outlable'> Estimated Carbon Emissions (g):
                        <input type="text" value={this.state.carbon} className="startinglocation outtext" />
                    </label>
                    <label className='traindistance outlable'> Estimated Cost (USD):
                        <input type="text" value={this.state.cost} className="startinglocation outtext" />
                    </label>
                    <label className='traindistance outlable'> Estimated Travel Time (Hr):
                        <input type="text" value={this.state.time} className="startinglocation outtext" />
                    </label>
                </div>
            </div>
        )
    }
}