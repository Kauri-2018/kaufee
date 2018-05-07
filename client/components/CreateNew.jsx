import React from 'react'
import {connect} from 'react-redux'

import {createNew} from '../actions'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCurrentOrderActive: this.props.isCurrentOrderActive
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.props.dispatch(createNew(this.props.state))
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
    isCurrentOrderActive: false
  }
}

export default connect(mapStateToProps)(CreateNew)
