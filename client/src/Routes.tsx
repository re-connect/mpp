import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notes from './Pages/Notes/Notes';

const Routes = () => (
  <Router>
    <Route path='/' exact component={Home} />
    <Route path='/login' exact component={Login} />
    <Route path='/notes/:centerId' component={Notes} />
  </Router>
);

export default Routes;
