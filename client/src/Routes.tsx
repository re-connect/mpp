import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Charts from './Pages/Charts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notes from './Pages/Notes/Notes';
import Workshops from './Pages/Workshops/Workshops';
import EditWorkshopForm from './Pages/Workshops/Components/EditWorkshopForm';

const Routes = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/charts" exact component={Charts} />
    <Route path="/notes/:centerId" component={Notes} />
    <Route path="/workshops/:centerId" component={Workshops} />
    <Route path="/workshop/:workshopId/edit" component={EditWorkshopForm} />
  </Router>
);

export default Routes;
