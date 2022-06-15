import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>

        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src = {profile_pic_name}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Emu Bello</div>
              <div className="brief_description">
                Hi! I'm an incoming junior at USC majoring in Computer Engineering and Computer Science
              </div>
            </div>
          </div>
        </div>

        </p> 
      </div>
    )
  }
}