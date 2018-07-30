// 구글로그인할래?

// 아니면 우리 회원이니? 로그인할래?

// tag-it-easy 설명 화면

import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

export default class SignUp extends Component {

  state = {
    message: null,
    isLogin: true,
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
      confirmPassword: null,
    }
  } 
  
  _formValidation(fieldsToValidate = [], callback = () => {}){
		const {isLogin, user} = this.state;

		const allFields = {

			name: {
				message: "Your name is required.",
				doValidate: () => {
					const value = _.trim(_.get(user, 'name', ""));	
					if(value.length > 2 && /^[가-힣]+$/){
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
				message: "Password should has more than 3 characters.",
				doValidate: () => {
					const value = _.get(user, 'password', '');

					if(value && value.length > 3 && /^(?=.[a-zA-Z])((?=.\d)|(?=.*\W)).{6,20}$/){
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
			error: errors,
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

	//******************************이부분은 참고용
	addSignupPost = (e) => {
		e.preventDefault();
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
	}
	/////************************************************ */




  _onSubmit = (event) => {

		const {isLogin,user} = this.state; 
		event.preventDefault();
		console.log(event.target);
    let fieldNeedToValidate = ['email', 'password'];
    
		if(!isLogin){
			fieldNeedToValidate = ['name', 'email', 'password', 'confirmPassword'];
		}

		this._formValidation(fieldNeedToValidate,(isValid) => {

				console.log("The form is validated? ", isValid);

				if(isValid){
					console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
					// send request to backend
					// addSignupPost(event)

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
					.catch((data) => console.log('wtf') )

					if(isLogin){
						console.log('###################')

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
						.then((data) => console.log('$$$$$$$$$$data$$$$$$$$$', data))
						.catch((data) => console.log('wtf') )

						// do send data for login endpoint
						// login(this.state.user.email, this.state.user.password).then((response) => {
						// 	/// login success
						// 	this.setState({
						// 		message: {
						// 			type: 'success',
						// 			message: 'Login successful.'
						// 		}
						// 	});
            //})
            // .catch((err) => {
						// 	// login not suscess.
						// 	this.setState({
						// 		message: {
						// 			type: 'error',
						// 			message: 'An error login!'
						// 		}
						// 	});
						// 	console.log(err);
						// })
					}else{
						// createUser(this.state.user).then((response) => {
						// 	console.log("Hey i got data after send post", response);
						// });
					}
				}
				console.log("FOrm is submitted as: ", isLogin  ? "Login" : "Register", 'data:', user);
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

  render(){

	const {isLogin, user, error, message} = this.state;
  const title = isLogin ? 'Log In' : 'Sign Up'
    
	return (
      <div className="app-login-form">
        <div className="app-login-form-inner">
          <h2 className="form-title">{title}</h2>
          <form onSubmit={this._onSubmit}>
            {
              message ? <div className="app-message">
                <p className={message.type}>{message.message}</p>
              </div>: null
            }
            {
              !isLogin ? <div>
                <div className={classNames('app-form-item', {'error': _.get(error, 'name')})}>
                  <label htmlFor="name-id">Nickname</label>
                  <input value={user.name} onChange={this._onTextFieldChange} placeholder="Only valid in Korean" id="name-id" type="text" name="name" />
                </div>
              </div>: null
            }
            <div className={classNames('app-form-item', {'error': _.get(error, 'email')})}>
              <label htmlFor="email-id">Email</label>
              <input value={user.email} onChange={this._onTextFieldChange} placeholder="Your email address" id="email-id" type="email" name="email" />
            </div>
            <div className={classNames('app-form-item', {'error': _.get(error, 'password')})}>
              <label htmlFor="password-id">Password</label>
              <input value={user.password} onChange={this._onTextFieldChange} placeholder="Your password" id="password-id" type="password" name="password" />
            </div>
            {
              !isLogin ? <div>
                  <div className={classNames('app-form-item', {'error': _.get(error, 'confirmPassword')})}>
                    <label htmlFor="confirm-password-id">Confirm Password</label>
                    <input value={user.confirmPassword} onChange={this._onTextFieldChange} placeholder="Confirm password" id="confirm-password-id" type="password" name="confirmPassword" />
                </div>
              </div>: null
            }
            {
              isLogin ? <div className="app-form-actions">
                <button className="app-button">Log In</button>
                <div className="app-form-description">
                  <div> <h4> You don't have an account?</h4> <button type="button" onClick={() => {
                      this.setState({isLogin: false});
                  }} className="app-button-link less-important">Sign Up</button></div>
                </div>
            </div> : <div className="app-form-actions"> 
                <button className="app-button">Sign Up</button>
                <div className="app-form-description">
                  <div> <h4>You have an account??</h4> <button type="button" onClick={() => {

                      this.setState({isLogin: true});

                  }} className="app-button-link less-important">Log In</button></div>
                  
                </div>
              </div>
            }
          </form>
      </div>
		</div>
		)
	}
};