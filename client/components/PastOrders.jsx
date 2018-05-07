import React from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'

import {requestAllOrders} from '../actions'
import ListPastOrders from './ListPastOrders'

class PastOrders extends React.Component {
  // constructor (props) {
  //   super(props)

  // }

  componentDidMount () {
    this.props.dispatch(requestAllOrders())
  }

  render () {
   
    this.props.allOrders.date = Moment(this.props.allOrders.date).format()
    const orders = this.props.allOrders || []
    return (
      <div className='order-container'>
        {orders.map(order =>
          <ListPastOrders key={order.id}
            {...order}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allOrders: state.allOrders
  }
}

export default connect(mapStateToProps)(PastOrders)
