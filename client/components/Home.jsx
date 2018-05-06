import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import {requestCurrentOrder, requestUsers} from '../actions'
import AddToOrder from './AddToOrder'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
  }

  render () {
    const orders = this.props.orders || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <OrderList orders={orders} />
        <AddToOrder />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)
