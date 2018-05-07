import React from 'react'

const User = (props) => (
  <p>
    {props.id}<br/>
    {props.date}<br/>
    {props.is_complete}<br/>
    {props.owner_id}<br/>
  </p>
)

export default User
