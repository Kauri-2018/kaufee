import React from 'react'
import {connect} from 'react-redux'

import {requestNewOrder, startNewOrder} from '../actions'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const user = this.props.dispatch(requestNewOrder())
    this.props.dispatch(startNewOrder(user))
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
