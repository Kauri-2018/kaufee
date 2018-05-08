import React from 'react'

function timeConverter (dateCreated) {
  const a = new Date(dateCreated)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const hour = a.getHours()
  const min = a.getMinutes()
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min
  return time
}

const User = (props) => (
  <div>
  Order ID: {props.id}  Order Date: {timeConverter(props.date)}
  Order Item: {props.order_text}   Order Item: {props.user_name}
    <hr/>
  </div>
)

export default User