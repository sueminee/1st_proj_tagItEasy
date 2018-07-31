import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

class Login extends Component {

  render(){

	const {user, error, message} = this.state;
    
	return (
      <div className="app-login-form">
        <div className="app-login-form-inner">
          <h2 className="form-title">Log In</h2>
          <form onSubmit={this._onSubmit}>
            {
              message ? <div className="app-message">
                <p className={message.type}>{message.message}</p>
              </div>: null
            }
            <div className={classNames('app-form-item', {'error': _.get(error, 'email')})}>
              <label htmlFor="email-id">email</label>
              <input value={user.email} onChange={this._onTextFieldChange} placeholder="Your email address" id="email-id" type="email" name="email" />
            </div>
            <div className={classNames('app-form-item', {'error': _.get(error, 'password')})}>
              <label htmlFor="password-id">password</label>
              <input value={user.password} onChange={this._onTextFieldChange} placeholder="Your password" id="password-id" type="password" name="password" />
            </div>
            <div className="app-form-actions">
                <button className="app-button">Log In</button>
                <div className="app-form-description">
                  <div> <h4> You don't have an account?</h4> 
									<button type="button" onClick={() => {
                      this.setState({isLogin: false});
                  }} className="app-button-link less-important">Sign Up</button></div>
                </div>
            </div>
          </form>
      </div>
		</div>
		)
	}
};

export default Login