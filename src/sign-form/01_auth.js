import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import '../img/logo.png'
import Login from './02_logIn';
import Signup from './03_signUp';

class Auth extends Component {

    render() {
        console.log(this.props.match.path)
        return (
            <Router>
                <Switch>
                    <Route path={`${this.props.match.path}/signup`} component={Signup}/>
                    <Route path={`${this.props.match.path}/login`} component={Login}/>
                </Switch>
            </Router>
        )
    }
};

export default Auth