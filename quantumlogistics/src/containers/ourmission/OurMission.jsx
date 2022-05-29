import React from 'react';
import {Feature} from '../../components';
import './OurMission.css';

const OurMission = () => (
    <div className="ourmission section__margin" id="ourmission">
      <div className="ourmission-feature">
        <Feature title="OUR MISSION"/>
      </div>
      <div className="ourmission-heading">
        <h1 className="gradient__text">Who we are and the problem we want to solve</h1>
      </div>
      <div className="ourmission-solve">
          <h1>We want to reduce carbon emissions on the delivery of cargo through the use of quantum computing. We also want to work on reducing the time it takes to deliver cargo as well.</h1>
      </div>
      <div className="ourmission-container">
        <Feature title="Abhinav" text="Hi, my name is Abhinav. I am in 10th grade and go to high school in Washington State. I enjoy coding, listening to music, and playing tennis. I enjoy doing programming where I apply algorithms to interesting problems in C++. I am new to the field of quantum computing and am excited to try it out at the Hack-Q-Thon 2022!" />
        <Feature title="Alex" text="My name is Alexander, Alex for short, and I am a sophomore in high school. I also live in Washington State, and I enjoy programming, playing lacrosse, and working out. I am so excited to make a project that I am passionate about while applying quantum computing to it." />
        <Feature title="Albert" text="Hi, my name is Albert. Just like Alex and Abhinav, I am a sophomore in high school and I live Washington State. My hobbies are coding, biking, and playing with my friends. I am even the president of the computer science club at my school. This is only my second hackathon, and I am excited to be here to try out quantum computing." />
      </div>
    </div>
  );
  
  export default OurMission;