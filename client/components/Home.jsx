import React from 'react'
import {connect} from 'react-redux'

import {getOrders} from '../actions'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(getOrders())
  }

  render (props) {
    return (
      <div className='order-container'>
        <Order />
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