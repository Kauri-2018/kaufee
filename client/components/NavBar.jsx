import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NavBar = ({isAuth, user}) => {
  return (
    <div className="navbar">
      {!isAuth && (
        <div>
          <Link to="/">Home</Link> |
          <Link to="/history">History</Link> |
          <Link to="/register">Register</Link> |
          <Link to="/login">Login</Link>
        </div>
      )}
      {isAuth && (
        <div>
          <Link to="/">Home</Link> |
          <Link to="/history">History</Link> |
          <Link to="/profile">{user.username}</Link> |
          <Link to="">Logout</Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}
export default connect(mapStateToProps)(NavBar)
