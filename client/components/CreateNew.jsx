import React from 'react'
import {connect} from 'react-redux'

import {createNewOrder} from '../actions'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.props.dispatch(createNewOrder(this.props.state))
    this.setState({
      isCurrentOrderActive: true
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

const mapStateToProps = state => {
  return {
    isCurrentOrderActive: state.currentOrder.isCurrentOrderActive
  }
}

export default connect(mapStateToProps)(CreateNew)
