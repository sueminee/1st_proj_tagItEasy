import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

class SignUp extends Component {
 
	render(){
    console.log(props);
    //const {user, error, message} = this.state;
    return (
      <div className="app-login-form">
        <div className="app-login-form-inner">
        <div> Signup </div>
        <div className="app-login-form">
          <div className="app-login-form-inner">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={this._onSubmit}>
              {
                message ? <div className="app-message">
                  <p className={message.type}>{message.message}</p>
                </div>: null
              }
              <div className={classNames('app-form-item', {'error': _.get(error, 'name')})}>
                <label htmlFor="name-id">Nickname</label>
                <input value={user.name} onChange={this._onTextFieldChange} placeholder="Only valid in Korean" id="name-id" type="text" name="name" />
              </div>
              <div className={classNames('app-form-item', {'error': _.get(error, 'email')})}>
                <label htmlFor="email-id">Email</label>
                <input value={user.email} onChange={this._onTextFieldChange} placeholder="Your email address" id="email-id" type="email" name="email" />
              </div>
              <div className={classNames('app-form-item', {'error': _.get(error, 'password')})}>
                <label htmlFor="password-id">Password</label>
                <input value={user.password} onChange={this._onTextFieldChange} placeholder="Your password" id="password-id" type="password" name="password" />
              </div>
              <div>
                    <div className={classNames('app-form-item', {'error': _.get(error, 'confirmPassword')})}>
                      <label htmlFor="confirm-password-id">Confirm Password</label>
                      <input value={user.confirmPassword} onChange={this._onTextFieldChange} placeholder="Confirm password" id="confirm-password-id" type="password" name="confirmPassword" />
                  </div>
                </div>
              <div className="app-form-actions"> 
                  <button className="app-button">Sign Up</button>
                  <div className="app-form-description">
                    <div> <h4>You have an account??</h4> <button type="button" onClick={() => {
                        this.setState({isLogin: true});
                    }} className="app-button-link less-important">Log In</button></div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      )
	}
};

export default SignUp