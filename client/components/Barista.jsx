import React from 'react'
import {connect} from 'react-redux'

import {requestCurrentOrder} from '../actions'
import OrderList from './OrderList'

class Barista extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.items || []
    }
    this.markComplete = this.markComplete.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
      .then(currentOrder => {
        const items = [...currentOrder.items]
        items.forEach(item => { item.isComplete = -1 })
        this.setState({items})
      })
  }

  markComplete (id) {
    const items = [...this.state.items]
    items.forEach(item => {
      if (item.id === id) {
        item.isComplete = -item.isComplete
      }
    })
    this.setState({items})
  }

  render () {
    return (
      <div className='barista-container'>
        <OrderList
          items={this.state.items}
          functionMessage='Completed'
          onClickFn={this.markComplete}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.currentOrder.items
  }
}

export default connect(mapStateToProps)(Barista)
