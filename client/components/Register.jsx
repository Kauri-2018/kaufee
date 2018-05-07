import React from 'react'
import {connect} from 'react-redux'

import {registerUser, receiveLogin} from '../apiClient'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewUser () {
    if (this.state.username && this.state.password && this.state.name) {
      registerUser({...this.state})
        .then(token => {
          // TODO Move to separate module at later stage
          localStorage.setItem('token', token)
        })
    }
  }

  render () {
    return (
      <div className ='register'>
        <h2>Register</h2>
        <div><input type='text' name='name' placeholder='First Name' onChange={this.handleChange}/></div>
        <div><input type='text' name='username' placeholder='Username' onChange={this.handleChange}/></div>
        <div><input type='password' placeholder='Password' name='password' onChange={this.handleChange}/></div>
        <button onClick={this.submitNewUser}>Register</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginData => {
      return dispatch(receiveLogin(loginData))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
