import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// import Home from './Home'
import Register from './Register'
import NavBar from './NavBar'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={NavBar} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/register' component={Register} />
      </div>
    </Router>
  )
}

export default App
