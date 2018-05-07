import React from 'react'
import {connect} from 'react-redux'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCurrentOrderActive: this.props.isCurrentOrderActive
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const isActive = e.target.isCurrentOrderActive
    this.setState({
      isCurrentOrderActive: isActive
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
    isCurrentOrderActive: false
  }
}

export default connect(mapStateToProps)(CreateNew)
