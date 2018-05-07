import React from 'react'
// import {connect} from 'react-redux'

import {requestNewOrder} from '../actions'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.createNewOrder = this.createNewOrder.bind(this)
  }

  createNewOrder () {
    this.props.dispatch(requestNewOrder())
  }

  render () {
    return (
      <div className="create-new-btn">
        <button onClick={this.createNewOrder} className="btn btn-submit">Create New Order</button>
      </div>
    )
  }
}

export default CreateNew
