import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  topBar,
  secondBar,
  thirdBar
} from './components'

import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/topBar' component={topBar} />
      <Route path='/secondBar' component={secondBar} />
      <Route path='/thirdBar' component={thirdBar} />
  </Router>
)

render(router, document.getElementById('root'))
