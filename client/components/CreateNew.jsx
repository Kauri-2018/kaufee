import React from 'react'
import {connect} from 'react-redux'

import {requestCurrentOrder} from '../actions'
import {addOrder} from '../apiClient'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    addOrder(this.props.userId)
      .then(() => {
        this.props.dispatch(requestCurrentOrder())
      })
  }

  render () {
    return (
      <div className="create-new-btn">
        <button onClick={this.handleClick} className="btn btn-submit">Create New Order</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userId: state.auth.user.userId
  }
}

export default connect(mapStateToProps)(CreateNew)
