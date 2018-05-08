import React from 'react'
import {connect} from 'react-redux'

import {updateUserProfile} from '../apiClient'
import {updateUser} from '../actions/index'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 0,
      credId: 0,
      name: '',
      orderText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleChange (e) {
    this.setState({
      userId: this.props.user.userId,
      credId: this.props.user.credId,
      orderText: e.target.value,
      name: this.props.user.name
    })
  }

  handleUpdate (e) {
    e.preventDefault()
    updateUserProfile(this.state)
      .then((user) => this.props.dispatch(updateUser(user)))
  }

  render () {
    const {name, orderText} = this.props.user
    return (
      <div className='user-profile'>
        <h2>Name: {name}</h2>
        <h3>Current order: {orderText}</h3>
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
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(Profile)
