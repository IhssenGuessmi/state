import React, { Component } from 'react'
import Button from './components/Button';


class App extends Component {
constructor(){
  super();
  this.state ={
    count : 0 ,
  }
}
componentDidMount(){
  this.countPeriode=setInterval(() => {this.setState  ({count:this.state.count+1})
    
  }, 1000);
}

  render() {
    return (
      <div className='App'>
        <Button />
         <p> {this.state.count} </p>
      </div>
    )
  }
}

export default App
