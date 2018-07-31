import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import '../img/logo.png'
import _ from 'lodash'
import Signup from './02_sign-up';
import Login from './03_log-in';

class Auth extends Component {
    
    state = {
        message: null,
        isLoginForm: true,
        user: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
            },

        error: {
            name: null,
            email: null,
            password: null,
            confirmPassword: null
            }
    }

    _formValidation(fieldsToValidate = [], callback = () => {}){
        const {user} = this.state;

        const allFields = {

            name: {
                message: "Your name is required.",
                doValidate: () => {
                    const value = _.trim(_.get(user, 'name', ""));	
                    if(value.length > 2){
                        return true;
                    }
                    return false;
                }
            },

            email: {
                message: "Email is not correct",
                doValidate: () => {
                    const value = _.get(user, 'email', '');
                    if(value.length >0 && /^0-9a-zA-Z@0-9a-zA-Z.[a-zA-Z]{2,3}$/i){
                        return true;
                    }
                    return false;
                }
            },

            password: {
                message: "Password should have more than 3 characters.",
                doValidate: () => {
                    const value = _.get(user, 'password', '');

                    if(value && value.length > 3){
                            return true;
                    }
                    return false;
                }
            },

            confirmPassword: {
                message: "Password does not match.",
                doValidate: () => {
                    const passwordValue = _.get(user, 'password');
                    const value = _.get(user, 'confirmPassword', '');

                    if(passwordValue === value){
                            return true;
                    }
                    return false;
                }
            }
        };

        let errors = this.state.error;

        _.each(fieldsToValidate, (field) => {
        const fieldValidate = _.get(allFields, field);
        
            if(fieldValidate){
                errors[field] = null;
                const isFieldValid = fieldValidate.doValidate();

                if(isFieldValid === false){
                    errors[field] = _.get(fieldValidate, 'message');
                }
            }
        });

        this.setState({
            error: errors
        }, () => {	
            console.log("After processed validation the form errors", errors);

            let isValid = true;
            _.each(errors, (err) => {
                if(err){
                    isValid = false;
                }
            });
            callback(isValid);
        })
    }

    _onSubmit = (event) => {

        const {isLoginForm,user} = this.state; 
        event.preventDefault();
        console.log(event.target);
        let fieldNeedToValidate = ['email', 'password'];

        if(!isLoginForm){
            fieldNeedToValidate = ['name', 'email', 'password', 'confirmPassword'];
        }

        this._formValidation(fieldNeedToValidate,(isValid) => {

                console.log("The form is validated? ", isValid);

                if(isValid){
                    event.preventDefault();
                    let name = this.state.user.name
                    let email = this.state.user.email
                    let password = this.state.user.password
            
                    fetch('https://jsonplaceholder.typicode.com/posts', {
                        method : 'POST',
                        headers: {
                            'Accept' : 'application/JSON, text/plain, */*',
                            'Content-type' : 'application/json'
                        },
                        body:JSON.stringify({name:name, email:email, password:password})
                    })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log('wtf', err) )

                    if(isLoginForm){
            
                        event.preventDefault();
                        let email = this.state.user.email
                        let password = this.state.user.password
                
                        fetch('https://jsonplaceholder.typicode.com/posts', {
                            method : 'POST',
                            headers: {
                                'Accept' : 'application/JSON, text/plain, */*',
                                'Content-type' : 'application/json'
                            },
                            body:JSON.stringify({email:email, password:password})
                        })
                        .then((res) => res.json())
                        .then(() => this.setState({
                            message: {
                                type: 'success',
                                message: 'Login successful.'
                            }
                        }))
                        .catch(() => this.setState({
                            message: {
                                type: 'error',
                                message: 'An error login!'
                            }
                }))
                    }
                }
                console.log("Form is submitted as: ", isLoginForm ? "Login" : "Register", 'data:', user);
        });
    }

    _onTextFieldChange = (event) => {
    let {user} = this.state;
    // console.log('event.target: ', event.target);
    console.log('this.state: ', this.state);
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    user[fieldName] = fieldValue;
    this.setState({user:user})
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Signup _formValidation = {this._formValidation} _onSubmit = {this._onSubmit} message = {this.this.props.message} isLoginForm = {this.props.isLoginForm} user = {this.props.user} error = {this.props.error}/>} />
                    <Route path="/login" render={() => <Login _formValidation = {this._formValidation} _onSubmit= {this._onSubmit} />}/>
                </Switch>
            </Router>
        )
    }
};

export default Auth