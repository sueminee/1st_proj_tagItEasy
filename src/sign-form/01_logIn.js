import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
// import classNames from 'classNames';
import '../img/logo.png';

class Login extends Component {

  state = {
    user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    hasToken: false,
    message: ''
  }

  _onSubmit = (event) => {

    const { user } = this.state; 
    event.preventDefault();
    console.log('OnSubmit event occurs: ', event.target);
    
    let email = this.state.user.email
    let password = this.state.user.password

    // fetch('http://ec2-54-180-2-226.ap-northeast-2.compute.amazonaws.com/', {
    // fetch('api/', {
    fetch('http://localhost:8080/', {
        method : 'POST',
        headers: {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({ email:email, password:password })})
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log('서버로부터의 메세지: ', data.message)
        // save it into user's local storage
        if (data.token) {
          window.localStorage.setItem('token', data.token)
        } else {
          this.setState({ message: data.message });
        }
        return data.success;
    })
    .then((hasToken) => {
        console.log('hasToken ?', hasToken);
        if (hasToken) {
          this.setState({ hasToken: true })
        } 
    })
    .catch((err) => { 
      console.log('wtf Log-in: ', err)
    })
    
    console.log("Form is submitted as: ", "Login", 'data:', user);
  }

  _onTextFieldChange = (event) => {

      let { user } = this.state;
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      
      user[fieldName] = fieldValue;
      this.setState({ user: user });
  }
  
  render() {
	  const { user } = this.state;

    if (this.state.hasToken) {
        console.log('오 너 토큰있네~', this.state.hasToken);
        return <Redirect to ='/urls'/>;
    }
    console.log('너의 토큰을 살펴봐도 될까?', this.state.hasToken);
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={require("../img/logo.png")} alt=""/>
          </div>
        </header>
        <div className="sign-form">
          <div>
            <h2 className="form-title">Log In</h2>
            <form onSubmit={(event) => {this._onSubmit(event)}}>
              <div>
                <div className='form-item'>
                  <label htmlFor="email-id">email</label>
                  <input value={user.email} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="이메일" id="email-id" type="email" name="email" />
                </div>
                <div className='form-item'>
                  <label htmlFor="password-id">password</label>
                  <input value={user.password} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="비밀번호" id="password-id" type="password" name="password" />
                </div>
              </div>
              {this.state.message !== '' ? <div className="app-message">{this.state.message}</div> : null}
              <div className="form-actions">
                <button className="app-button">Log In</button>
                <div className="form-description">
                  <div><h5>You don't have an account?</h5><Link to="/signup" className="less-important">Sign Up</Link></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
export default Login;