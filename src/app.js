import React from 'react'
import {render} from 'react-dom'
import { Router, Route , browserHistory} from 'react-router'
import routes from './routes'

import Nav from './modules/navPage'
import Page1 from './modules/page1'
import Page2 from './modules/page2'
import NotFound from './modules/notfound'

if(typeof window === "object") {
  require('./app.css')
}

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('root'))
