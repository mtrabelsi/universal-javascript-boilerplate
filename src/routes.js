
'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './modules/App'
import Page1 from './modules/page1'
import Page2 from './modules/page2'
import NotFound from './modules/notfound'

const routes = (
  <Route path="/" component={App}>
    <Route path="/page1" component={Page1}/>
    <Route path="/page2" component={Page2}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;
