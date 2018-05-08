import React from 'react'
import {Link} from 'react-router-dom'

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
    <hr/>
    <Link to={`/history/${props.id}`} >Order ID: {props.id}  Order Date: {timeConverter(props.date)} </Link>

  </div>
)

export default User
