import React from 'react'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: this.props
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      list: {}
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
    // return a thing
  }
}

export default CreateNew
