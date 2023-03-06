import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
// import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import Position from './components/admin/position/Position';
import Skill from './components/admin/skill/Skill';
import Source from './components/admin/source/Source';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* admin routes here */}
          <Route path="/admin" element={<MasterLayout />} >
            <Route index path='dashboard' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='position' element={<Position />} />
            <Route path='skill' element={<Skill />} />
            <Route path='source' element={<Source />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;