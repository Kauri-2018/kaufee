import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

const NavBar = ({isAuth, user, handleLogout}) => {
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
          <Link to="/" onClick={handleLogout}>Logout</Link>
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

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(logoutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
