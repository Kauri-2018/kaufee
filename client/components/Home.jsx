import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import CreateNew from './CreateNew'
import CompleteButton from './CompleteButton'
import {get} from '../utils/localStorage'
import {receiveLogin} from '../actions/login'
import {getUser} from '../apiClient'
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
    this.hasAuth = this.hasAuth.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
    this.hasAuth()
  }

  markComplete () {
    this.props.dispatch(orderComplete(this.props.orderId))
  }

  hasAuth () {
    const token = get('token')
    if (token) {
      getUser()
        .then(user => {
          this.props.dispatch(receiveLogin(user))
        })
    }
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
        <CompleteButton key='complete-button' markComplete={this.markComplete} />
      ])
    }
    return (
      <OrderList key='orderlist' items={items} />
    )
  }

  renderInactiveOrder (items) {
    if (this.props.isAuth) {
      return (
        <CreateNew />
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
