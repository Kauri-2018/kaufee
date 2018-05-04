import React from 'react'

const User = (props) => (
  <option className="user" value={`${props.id}`}>{props.name}</option>
)

export default User
