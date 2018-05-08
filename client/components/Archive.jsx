import React from 'react'
import {connect} from 'react-redux'

import {requestAllOrders} from '../actions'
import ListPastOrders from './ListPastOrders'

class Archive extends React.Component {
  // constructor (props) {
  //   super(props)

  // }

  componentDidMount () {
    this.props.dispatch(requestAllOrders())
  }

  render () {
    const orders = this.props.allOrders || []

    return (
      <div className='order-container'>

        {orders.map(order =>
          <ListPastOrders key={order.id}
            {...order}
          />
        ) }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allOrders: state.allOrders
  }
}

export default connect(mapStateToProps)(Archive)
