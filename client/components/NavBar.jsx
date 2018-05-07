import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NavBar = ({isAuth, user}) => {
  return (
    <div className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/history"><button>History</button></Link>
      {isAuth
        ? ([
          <Link key='profile' to="/profile"><button>{user.name}</button></Link>,
          <Link key='logout' to="/"><button>Logout</button></Link>
        ])
        : ([
          <Link key='register' to="/register"><button>Register</button></Link>,
          <Link key='login' to="/login"><button>Login</button></Link>
        ])
      }
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
