import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Login from './sign-form/01_logIn';
import Signup from './sign-form/02_signUp';
=======
import './css/App.css';
import './img/logo.png'
import Auth from './sign-form/01_auth';
>>>>>>> 8089a57799637adf48fa2912c4f5101c05d9f945
import Home from './main/01_home';
import './css/App.css';

class App extends Component {

  render() {
  
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/urls" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;