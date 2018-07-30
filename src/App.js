import React, { Component } from 'react';
import './App.css';
import Signup from './Tag1_sign-up';
import './img/logo.png'

class App extends Component {
  state = {
    id : '',
    password : ''
  }


GetLogin = () =>{
  const id = this.state.id;
  const password = this.state.password;
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo"> <img src={require("./img/logo.png")} /></div>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Signup />
      </div>
    );
  }
}

export default App;
