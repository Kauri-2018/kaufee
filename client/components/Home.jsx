import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
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
    const items = this.props.items || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <OrderList
          items={items}
          functionMessage='Delete Item'
          onClickFn={this.deleteItem} />
        <div className="completed">
          <button className='button-primary' onClick={this.markComplete}>Mark as Complete</button>
        </div>
        {this.props.isAuth && (<AddToOrder />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    orderId: state.currentOrder.id,
    items: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)
