// id input
// password input

// 로그인 버튼 (누르면 re-direct)

import React, { Component } from 'react';

class Login extends Component{
  state ={
    id:'',
    password:''
  }

  handleOnChange = (evt) => {
    this.setState({
      query: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <form action="" method="post">
          id : <input type="text" placeholder="id를 입력해주세요" onChange={(evt) => this.props.handleOnChange(evt)} /><br/>
          password: <input type="text" placeholder="password를 입력해주세요" onChange={(evt) => this.props.handleOnChange(evt)} /><br/>
          <input type="submit" value="Submit" />
        </form>

        
        {/* // <br />
        // <button onClick={()=> this.onSubmit()} type="primary">로그인</button> */}
      </div>
    )
  }
};


export default Login;
