import React from 'react'
import {connect} from 'react-redux'

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

  handleChange (e) {
    this.setState({
      orderText: e.target.value
    })
  }

  handleUpdate (e) {
    e.preventDefault()
    this.setState({
      userId: this.props.user.userId,
      name: this.props.user.name
    })
      .then(() => updateUserProfile(this.state))
  }

  render () {
    return (
      <div className='user-profile'>
        <h2>Name: {this.props.isAuth && this.props.user.name}</h2>
        <h3>Current order: {this.props.isAuth && this.props.user.orderText}</h3>
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Profile)
