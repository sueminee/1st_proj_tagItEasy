import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './sign-form/01_logIn';
import Signup from './sign-form/02_signUp';
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