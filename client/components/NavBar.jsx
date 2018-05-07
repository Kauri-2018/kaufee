import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NavBar = ({isAuth, user}) => (
  <div className="navbar">
    <div className="nav-elements" >
      <Link to="/"><button>Home</button></Link>
      <Link to="/history"><button>History</button></Link>
    </div>
    {isAuth ? <div className="auth-elements" >
      <Link key='profile' to="/profile"><button>{user.name}</button></Link>
      <Link key='logout' to="/"><button>Logout</button></Link>
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
export default connect(mapStateToProps)(NavBar)
