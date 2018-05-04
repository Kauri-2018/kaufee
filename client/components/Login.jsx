import React from 'react'
import {loginUser} from '../apiClient'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.attemptUserLogin = this.attemptUserLogin.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  attemptUserLogin () {
    if (this.state.username && this.state.password) {
      loginUser({...this.state})
        .then(token => {
          // TODO separate to different module
          localStorage.setItem('token', token)
        })
    }
  }

  render () {
    return (
      <div className ='login'>
        <h2>Login</h2>
        <div><input type='text' name='username' placeholder='Username' onChange={this.handleChange}/></div>
        <div><input type='password' placeholder='Password' name='password' onChange={this.handleChange}/></div>
        <button onClick={this.attemptUserLogin}>Log in</button>
      </div>
    )
  }
}

export default Login
