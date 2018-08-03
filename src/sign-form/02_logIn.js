import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
// import classNames from 'classnames'
// import _ from 'lodash'

class Login extends Component {

  state = {
    user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    hasToken: false
  }

  _onSubmit = (event) => {

    const { user } = this.state; 
    event.preventDefault();
    console.log('OnSubmit event occurs: ', event.target);
    
    let email = this.state.user.email
    let password = this.state.user.password

    fetch('http://localhost:3333/auth/login', {
        method : 'POST',
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({ email:email, password:password })})
    .then((res) => res.json())
    .then((data) => {
        console.log('data: ', data)
        // save it into user's local storage // when i want it remove from user's LS : localStorage.removeItem('data.token')
        window.localStorage.setItem('token', data.token) // when I want to see it back : JSON.parse(window.localStorage.getItem('token'))
        return data.success;
    })
    .then((hasToken) => {
        console.log('hasToken ?', hasToken);

        if (hasToken) {
          this.setState({ hasToken: true })
        } 
    })
    .catch((err) => console.log('wtf Log-in: ', err))
    
    console.log("Form is submitted as: ", "Login", 'data:', user);
  }

  _onTextFieldChange = (event) => {

      let { user } = this.state;

      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      
      user[fieldName] = fieldValue;
      this.setState({ user: user });

  }
  
  render(){
	  const { user } = this.state;
    
    if (this.state.hasToken) {
      console.log('토큰 있지~', this.state.hasToken);

      return <Redirect to ='/home'/>;
    } 

    console.log('토큰 없다 ㅠㅠ', this.state.hasToken);
    return (
        <div className="sign-form">
          <div>
            <h2 className="form-title">Log In</h2>
            <form onSubmit={(event) => {this._onSubmit(event)}}>
              <div className='form-item'>
                <label htmlFor="email-id">email</label>
                <input value={user.email} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Your email address" id="email-id" type="email" name="email" />
              </div>
              <div className='form-item'>
                <label htmlFor="password-id">password</label>
                <input value={user.password} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Your password" id="password-id" type="password" name="password" />
              </div>
              <div className="form-actions">
                <button className="app-button">Log In</button>
                <div className="form-description">
                  <div><h5>You don't have an account?</h5><Link to="/auth/signup" className="less-important">Sign Up</Link></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    }
  //}
};
export default Login;