import React from 'react'
import {connect} from 'react-redux'

import Order from './Order'
import Users from './Users'
import {requestCurrentOrder, requestUsers, updateOrder} from '../actions'
import CreateNew from './CreateNew'

class Home extends React.Component {
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

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
  }

  render () {
    const orders = this.props.orders || []
    const users = this.props.users || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <ul>
          {orders.map(order =>
            <Order key={order.id}
              {...order}
            />
          )}
        </ul>
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
          <CreateNew />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.currentOrder.id,
    orders: state.currentOrder.items,
    users: state.userList
  }
}

export default connect(mapStateToProps)(Home)
