import React, { Component } from 'react'
import './Profile.css'
import imgSrc from "../imgSrc.jpg"

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            fullName:"ihssen Guessmi", 
            bio:"I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do.", 
            // imgSrc:'image' ,
            profession:"Full Stack Developer",
        }
    }
  render() {
    return (
      <div>
          <p> {this.state.fullName} </p>
          <p> {this.state.bio} </p>
          <p> {this.state.profession} </p>
          <img src= {imgSrc} alt='Profile Picture' />
      </div>
    )
  }
}
export default Profile
