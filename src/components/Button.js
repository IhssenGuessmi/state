import React, { Component } from 'react'
import './Button.css'
import Profile from './Profile';

class Button extends Component {  
  constructor() {
    super();
    this.state = {show : false}
  }

  render() {
    return (
        <div class="wrap">
        <button class="button" onClick={()=>{this.setState({show:!this.state.show})}}>Show info</button>
        <br />
        {this.state.show ? <Profile />: null}
        </div>
    )
  }
}

export default Button