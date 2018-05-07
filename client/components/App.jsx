import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import NavBar from './NavBar'

const App = () => {
  return (
    <Router>
      <div className='app container'>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>
  )
}

export default App
