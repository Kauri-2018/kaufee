import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link> |
      <Link to="/history">History</Link> |
      <Link to="/register">Register</Link> |
      <Link to="/login">Login</Link>
    </div>
  )
}

export default NavBar
