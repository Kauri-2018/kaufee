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
    addOrder()
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

export default connect()(CreateNew)
