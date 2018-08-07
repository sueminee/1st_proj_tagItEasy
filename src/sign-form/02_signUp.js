import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
// import classNames from 'classNames';
import '../img/logo.png';

class Signup extends Component {

  state = {
    user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    goToLogin: false,
    message: ''
  }

  _onSubmit = (event) => {

      const { user } = this.state; 
      event.preventDefault();
      console.log('OnSubmit event occurs: ', event.target);

      let username = this.state.user.username
      let email = this.state.user.email
      let password = this.state.user.password

      // fetch('http://ec2-54-180-2-226.ap-northeast-2.compute.amazonaws.com/signup', {
      // fetch('api/signup', {
      fetch('http://localhost:8080/signup', {  
          method : 'POST',
          headers: {
              'Accept' : 'application/json, text/plain, */*',
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({username:username, email:email, password:password})
      })
      .then((res) => { 
        // console.log('res is coming!!!', JSON.stringify(res)) 
        return res.json()
      })
      .then((data) => {
        console.log('서버로부터의 메세지: ', data.message)
        if (data.message.includes('Wrong') || data.message.includes('error')) {
          this.setState({ 
            message: data.message
          })
        } else {
          this.setState({ 
            goToLogin: true
          })
        }
        
      })
      .catch((err) => console.log('wtf Sign-up: ', err) )

      console.log("Form is submitted as: ","Signup", 'data:', user);
  }

  _onTextFieldChange = (event) => {

      let { user } = this.state;
      //console.log('this.state: ', this.state);
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      user[fieldName] = fieldValue;
      this.setState({ user: user });
  }

	render(){
    const { user } = this.state;
    if (this.state.goToLogin) {
      return <Redirect to ='/'/>;
    } 

    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={require("../img/logo.png")} alt=""/>
          </div>
        </header>
        <div className="sign-form">
          <div>
            <h2 className="form-title">Sign Up</h2>        
            <form onSubmit={(s) => {this._onSubmit(s)}}>
              <div>
                <div className='form-item'>
                  <label htmlFor="name-id">username</label>
                  <input value={user.username} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="이름" id="username-id" type="text" name="username" />
                </div>
                <div className='form-item'>
                  <label htmlFor="email-id">Email</label>
                  <input value={user.email} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="이메일 주소" id="email-id" type="email" name="email" />
                </div>
                <div className='form-item'>
                  <label htmlFor="password-id">Password</label>
                  <input value={user.password} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="비밀번호" id="password-id" type="password" name="password" />
                </div>
                <div className='form-item'>
                    {/* <label htmlFor="confirm-password-id">Confirm Password</label> */}
                    <input value={user.confirmPassword} onChange={(e) => {this._onTextFieldChange(e)}} placeholder="비밀번호 확인" id="confirm-password-id" type="password" name="confirmPassword" />
                </div>
              </div>
              {this.state.message !== "" ? <div className="app-message">{this.state.message}</div> : null}
              <div className="form-actions"> 
                <button className="app-button">Sign Up</button>
                <div className="form-description">
                  <div><h5>You have an account??</h5><Link to="/" className="less-important">Log In</Link></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
	}
};

export default Signup;

