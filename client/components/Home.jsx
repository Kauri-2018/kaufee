import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import CreateNew from './CreateNew'
import {requestCurrentOrder, requestUsers, orderComplete} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.markComplete = this.markComplete.bind(this)
  }

  markComplete () {
    this.props.dispatch(orderComplete(this.props.orderId))
  }

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
        <div className="completed">
          <button className='button-primary' onClick={this.markComplete}>Mark as Complete</button>
        </div>
        <AddToOrder />
        <CreateNew />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.currentOrder.id,
    orders: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)
