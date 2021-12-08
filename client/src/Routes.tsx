import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Charts from './Pages/Charts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notes from './Pages/Notes/Notes';
import EditWorkshop from './Pages/Workshops/EditWorkshop';
import Workshops from './Pages/Workshops/Workshops';
import CreateWorkshop from "./Pages/Workshops/CreateWorkshop";

const Routes = () => (
  <Router>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/charts" component={Charts}/>
    <Route path="/centers/:centerId/notes" component={Notes}/>
    <Route path="/centers/:centerId/workshops" component={Workshops}/>
    <Route path="/workshop/:workshopId/edit" component={EditWorkshop}/>
    <Route path="/centers/:centerId/create-workshop" component={CreateWorkshop}/>
  </Router>
);

export default Routes;
