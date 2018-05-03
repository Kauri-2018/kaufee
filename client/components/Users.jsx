import React from 'react'

const User = (props) => (
  <a className="user" value={`${props.id}`}>{props.name}</a>
)

export default User
