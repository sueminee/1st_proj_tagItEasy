import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import './img/logo.png'
import Auth from './sign-form/01_auth';
import Home from './main/01_home';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo"> <img src={require("./img/logo.png")} alt=""/></div>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
