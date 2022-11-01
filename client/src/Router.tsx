import * as React from 'react';
import {Route, Routes} from 'react-router-dom';
import Charts from './Pages/Charts';
import Index from './Pages/Home';
import Login from './Pages/Login';
import List from './Pages/Permanences/List';
import EditWorkshop from './Pages/Workshops/EditWorkshop';
import Workshops from './Pages/Workshops/Workshops';
import CreateWorkshop from './Pages/Workshops/CreateWorkshop';
import Create from './Pages/Permanences/Create';
import Edit from './Pages/Permanences/Edit';


const Router = () => (
  <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/charts" element={<Charts/>}/>
    <Route path="/centers/:centerId/permanences" element={<List/>}/>
    <Route path="/centers/:centerId/create-permanence" element={<Create/>}/>
    <Route path="/permanence/:permanenceId/edit" element={<Edit/>}/>
    <Route path="/centers/:centerId/workshops" element={<Workshops/>}/>
    <Route path="/workshop/:workshopId/edit" element={<EditWorkshop/>}/>
    <Route path="/centers/:centerId/create-workshop" element={<CreateWorkshop/>}/>
  </Routes>
);

export default Router;
