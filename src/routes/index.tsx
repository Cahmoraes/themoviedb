import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import Movie from '../pages/Movie'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  )
}

export default Routes