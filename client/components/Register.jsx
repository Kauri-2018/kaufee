import React from 'react'
import {registerUser} from '../apiClient'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewUser () {
    if (this.state.username && this.state.password && this.state.name) {
      registerUser({...this.state})
    }
  }

  render () {
    return (
      <div className ='register'>
        <span><input name='name' placeholder='Full Name' onChange={this.handleChange}/></span>
        <span><input name='username' placeholder='Username' onChange={this.handleChange}/></span>
        <span><input type='password' placeholder='Password' name='password' onChange={this.handleChange}/></span>
        <button onClick={this.submitNewUser}>Register</button>
      </div>
    )
  }
}

export default Register
