import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import NavBar from './NavBar'
import Barista from './Barista'

const App = () => {
  return (
    <Router>
      <div className='app container'>
        <Switch>
          <Route path='/barista' component={Barista} />
          <Route path='/' component={AppPaths} />
        </Switch>
      </div>
    </Router>
  )
}

const AppPaths = () => (
  <div>
    <Route path='/' component={NavBar} />
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/profile' component={Profile} />
  </div>
)

export default App
