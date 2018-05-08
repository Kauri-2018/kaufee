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
        {this.props.isAuth
          ? renderAuthComponents(items, this.props.orderIsComplete, this.deleteItem, this.markComplete)
          : <OrderList key='orderlist' items={items} />}
      </div>
    )
  }
}

const renderAuthComponents = (items, orderIsComplete, deleteItem, markComplete) => {
  if (orderIsComplete) {
    return [<OrderList key='orderlist' items={items} functionMessage='Delete Item' onClickFn={deleteItem} />,
      <AddToOrder key='addtoorder'/>]
  }
  return [<OrderList key='orderlist' items={items} functionMessage='Delete Item' onClickFn={deleteItem} />,
    <CompleteButton key='completebutton' markComplete={markComplete} />,
    <AddToOrder key='addtoorder'/>]
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    orderIsCompleted: state.currentOrder.id === 0,
    orderId: state.currentOrder.id,
    items: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Home)
