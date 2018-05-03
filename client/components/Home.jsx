import React from 'react'
import {connect} from 'react-redux'

import Order from './Order'
import {showOrders} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: ''
    }
  }
  componentDidMount () {
    this.props.dispatch(showOrders())
  }

  render () {
    return (
      <div className='order-container'>
        {this.state.orders.map(order =>
          <Order key={order.id}
            {...order}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(Home)
