import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import classNames from 'classnames'
// import _ from 'lodash'

class Signup extends Component {

  state = {
    user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
        }
  }

  _onSubmit = (event) => {

      const { user } = this.state; 
      event.preventDefault();
      console.log('OnSubmit event occurs: ', event.target);

      let username = this.state.user.username
      let email = this.state.user.email
      let password = this.state.user.password

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method : 'POST',
          headers: {
              'Accept' : 'application/JSON, text/plain, */*',
              'Content-type' : 'application/json'},
          body:JSON.stringify({username:username, email:email, password:password})
      })
      .then((res) => res.json())
      .then((data) => console.log('Posted Sign-up data: ', data))
      .catch((err) => console.log('wtf Sign-up: ', err) )

      console.log("Form is submitted as: ","Signup", 'data:', user);
  }

  _onTextFieldChange = (event) => {

      let { user } = this.state;
      console.log('this.state: ', this.state);

      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      
      user[fieldName] = fieldValue;
      this.setState({ user: user });

  }

	render(){
    console.log(this.state);
    const { user } = this.state;

    return (
      <div className="sign-form">
        <div>
          <h2 className="form-title">Sign Up</h2>        
          <form onSubmit={(s) => {this._onSubmit(s)}}>  
            <div className='form-item'>
              <label htmlFor="name-id">username</label>
              <input value={user.username} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Your username" id="username-id" type="text" name="username" />
            </div>
            <div className='form-item'>
              <label htmlFor="email-id">Email</label>
              <input value={user.email} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Your email address" id="email-id" type="email" name="email" />
            </div>
            <div className='form-item'>
              <label htmlFor="password-id">Password</label>
              <input value={user.password} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Your password" id="password-id" type="password" name="password" />
            </div>
            <div className='form-item'>
                <label htmlFor="confirm-password-id">Confirm Password</label>
                <input value={user.confirmPassword} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="Confirm password" id="confirm-password-id" type="password" name="confirmPassword" />
            </div>
            <div className="form-actions"> 
              <button className="app-button">Sign Up</button>
              <div className="form-description">
                <div><h5>You have an account??</h5><Link to="/auth/login" className="less-important">Log In</Link></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      )
	}
};

export default Signup;