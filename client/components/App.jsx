import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
