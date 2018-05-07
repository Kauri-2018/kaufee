import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import CreateNew from './CreateNew'
import {
  requestCurrentOrder,
  requestUsers,
  orderComplete,
  deleteItemById
} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.markComplete = this.markComplete.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
  }

  markComplete () {
    this.props.dispatch(orderComplete(this.props.orderId))
  }

  deleteItem (id) {
    this.props.dispatch(deleteItemById(id))
  }

  render () {
    const orders = this.props.orders || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <OrderList orders={orders} onClickFn={this.deleteItem} />
        <div className="completed">
          <button className='button-primary' onClick={this.markComplete}>Mark as Complete</button>
        </div>
        <AddToOrder />
        <CreateNew />
        {this.props.isAuth && (<AddToOrder />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    orderId: state.currentOrder.id,
    orders: state.currentOrder.items,
    isCurrentOrderActive: state.currentOrder.isCurrentOrderActive
  }
}

export default connect(mapStateToProps)(Home)
