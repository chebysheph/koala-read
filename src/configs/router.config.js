import React from 'react'
import { Router, Route, hashHistory/* , Redirect */ } from 'react-router'
import * as test from '../pages/test' // 菜单

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={test.login} />
    <Route path="/login" component={test.login} />
  </Router>
)
