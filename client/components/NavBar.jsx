import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar row">
      <Link to="/"><button>Home</button></Link>|
      <Link to="/history"><button>History</button></Link>|
      <Link to="/register"><button>Register</button></Link>|
      <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default NavBar
