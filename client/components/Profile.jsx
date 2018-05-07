import React from 'react'
import {Link} from 'react-router-dom'

import {getUser, updateUserProfile} from '../apiClient'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 0,
      name: '',
      orderText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount () {
    getUser()
      .then(user => {
        this.setState({user})
      })
  }

  handleChange (e) {
    this.setState({
      orderText: e.target.value
    })
  }

  handleUpdate (e) {
    e.preventDefault()
    updateUserProfile(this.state)
  }

  render () {
    return (
      <div className='user-profile'>
        <Link to="/">Home</Link>
        <h2>Name: {this.state.name}</h2>
        <h3>Current order: {this.state.orderText}</h3>
        <div className='change-order'>
          <form onSubmit={this.handleUpdate}>
            <h5>Change your order below</h5>
            <input type="text" onChange={this.handleChange} />
            <button className="btn btn-submit">Change order</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Profile
