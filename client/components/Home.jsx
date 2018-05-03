import React from 'react'
import {connect} from 'react-redux'

import Order from './Order'
import {requestCurrentOrder} from '../actions'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
  }

  render () {
    const orders = this.props.orders || []
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
