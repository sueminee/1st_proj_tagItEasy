import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import './img/logo.png'
import Auth from './sign-form/01_auth';
import Home from './main/01_home';

class App extends Component {
  state:{
    username:''
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
