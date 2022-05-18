import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import Charts from './Pages/Charts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notes from './Pages/Notes/Notes';
import EditWorkshop from './Pages/Workshops/EditWorkshop';
import Workshops from './Pages/Workshops/Workshops';
import CreateWorkshop from './Pages/Workshops/CreateWorkshop';
import CreateNote from './Pages/Notes/CreateNote';
import EditNote from './Pages/Notes/EditNote';


const Router = () => (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/charts" element={<Charts/>}/>
      <Route path="/centers/:centerId/notes" element={<Notes/>}/>
      <Route path="/centers/:centerId/create-note" element={<CreateNote/>}/>
      <Route path="/note/:noteId/edit" element={<EditNote/>}/>
      <Route path="/centers/:centerId/workshops" element={<Workshops/>}/>
      <Route path="/workshop/:workshopId/edit" element={<EditWorkshop/>}/>
      <Route path="/centers/:centerId/create-workshop" element={<CreateWorkshop/>}/>
    </Routes>
);

export default Router;
