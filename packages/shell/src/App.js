import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App () {
  const HomePage = React.lazy(() => import("Home/HomePage"));
  const AuthPage = React.lazy(() => import("Auth/AuthPage"));
  return (
    <Router>
      <div>
          <ul>
            <li> <a href='/home'> Home </a> </li>
            <li> <a href='/auth'> Login </a> </li>
          </ul>
          <Switch>
            <Route exact path='/home'>
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            </Route>
            <Route exact path='/auth'>
              <Suspense fallback={<div>Loading...</div>}>
                <AuthPage />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}