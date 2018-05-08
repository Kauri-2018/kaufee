import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../actions/logout'

const NavBar = ({isAuth, user, handleLogout}) => (
  <div className="navbar">
    <div className="nav-elements" >
      <Link to="/"><button>Home</button></Link>
      <Link to="/history"><button>History</button></Link>
    </div>
    {isAuth
      ? <div className="auth-elements" >
        <Link key='profile' to="/profile"><button>{user.name}</button></Link>
        <Link key='logout' onClick={handleLogout} to="/"><button>Logout</button></Link>
      </div>
      : <div className="auth-elements" >
        <Link key='register' to="/register"><button>Register</button></Link>
        <Link key='login' to="/login"><button>Login</button></Link>
      </div>
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
