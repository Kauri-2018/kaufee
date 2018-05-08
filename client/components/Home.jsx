import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import CompleteButton from './CompleteButton'
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
    this.renderActiveOrder = this.renderActiveOrder.bind(this)
    this.renderInactiveOrder = this.renderInactiveOrder.bind(this)
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
    const items = this.props.items || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        {this.props.isCurrentOrderActive
          ? this.renderActiveOrder(items)
          : this.renderInactiveOrder(items)}
      </div>
    )
  }

  renderActiveOrder (items) {
    if (this.props.isAuth) {
      return ([
        <OrderList key='order-list' items={items} onClickFn={this.deleteItem} />,
        <AddToOrder key='add-to-order' />,
        <CompleteButton key='complete-button' />
      ])
    }
    return (
      <OrderList key='orderlist' items={items} />
    )
  }

  renderInactiveOrder (items) {
    if (this.props.isAuth) {
      return (
        <p className='error'>MAKE NEW ORDER BUTTON GOES HERE</p>
      )
    }
    return (
      <p>No current orders. Please log in to create a new order.</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    isCurrentOrderActive: state.currentOrder.isCurrentOrderActive,
    orderId: state.currentOrder.id,
    items: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)
