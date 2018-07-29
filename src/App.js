import React, { Component } from 'react';
import './App.css';
import Login from './Tag2_log-in'
import Signup from './Tag1_sign-up';

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
          <h1 className="App-title">tag it easy</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Signup />
        {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
