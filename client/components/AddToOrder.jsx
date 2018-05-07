import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import {updateOrder} from '../actions'

class AddToOrder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange (e) {
    this.setState({
      userId: e.target.value
    })
  }

  handleAdd (e) {
    e.preventDefault()
    this.props.dispatch(updateOrder(this.state.userId, this.props.orderId))
  }

  render () {
    const users = this.props.users || []
    return (
      <div className='addorder'>
        <form onSubmit={this.handleAdd}>
          <h2>Add Order</h2>
          <select onChange={this.handleChange} >
            <option>Select User</option>
            {users.map(user =>
              <Users key={user.id}
                {...user}
              />
            )}
          </select>
          <button className="btn btn-submit">Add to Order</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.currentOrder.id,
    users: state.userList
  }
}

export default connect(mapStateToProps)(AddToOrder)
