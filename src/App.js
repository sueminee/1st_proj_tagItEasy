import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import './img/logo.png'
import Auth from './sign-form/01_auth';
import Login from './sign-form/02_logIn';
import Signup from './sign-form/03_signUp';
// import Home from './main/01_home';

class App extends Component {

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo"><img src={require("./img/logo.png")} alt=""/></div>
        </header>
        <Router>
          <Switch>
            {/* 토큰이 있는지 확인하고 Home 혹은 Login 화면에 랜더 */}
            <Route path="/auth" component={Auth}/>
            {/* <Route exact path="/" component={Home}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
