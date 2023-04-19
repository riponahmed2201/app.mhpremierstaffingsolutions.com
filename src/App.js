import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import AdminLogin from './components/frontend/auth/AdminLogin';
import ClientRegister from './components/frontend/register/ClientRegister';
import Position from './components/admin/position/Position';
import Skill from './components/admin/skill/Skill';
import Source from './components/admin/source/Source';
import EmployeeRegister from './components/frontend/auth/EmployeeRegister';
import EmployeeRegisterWelcome from './components/frontend/profile/EmployeeRegisterWelcome';
import EmployeeList from './components/admin/employee/EmployeeList';
import ClientList from './components/admin/client/ClientList';
import EmployeeDetails from './components/admin/employee/EmployeeDetails';
import ClientDetails from './components/admin/client/ClientDetails';
import AddMHEmployee from './components/admin/mhEmployee/AddMHEmployee';
import EditMHEmployee from './components/admin/mhEmployee/EditMHEmployee';

//For client
import ClientEmployeeList from './components/client/employee/EmployeeList';
import ClientDashboard from './components/frontend/dashboard/ClientDashboard';
import MHEmployeeList from './components/admin/mhEmployee/MHEmployeeList';
import Places from './components/frontend/map/Places';
import ViewCertificate from './components/admin/employee/ViewCertificate';
import Login from './components/frontend/login/Login';
import Home from './components/frontend/Home/Home';
import ClientMasterLayout from './layouts/frontend/ClientMasterLayout';
import About from './components/frontend/about/About';
import Customer from './components/frontend/customer/Customer';
import Career from './components/frontend/career/Career';
import DashboardLayout from './layouts/frontend/dashboard/DashboardLayout';
import MyEmployee from './components/frontend/client/MyEmployee';
import EmployeeViewDetails from './components/frontend/dashboard/EmployeeViewDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/client-register' element={<ClientRegister />} />
          <Route path='/employee-register' element={<EmployeeRegister />} />
          <Route path='/employee-welcome' element={<EmployeeRegisterWelcome />} />

          <Route path="/" element={<DashboardLayout />} >
            <Route index path='client-dashboard' element={<ClientDashboard />} />
            <Route path='client-myemployee' element={<MyEmployee />} />
            <Route path='employee-view-details/:id' element={<EmployeeViewDetails />} />
          </Route>

          <Route path="/" element={<ClientMasterLayout />} >
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/career' element={<Career />} />
          </Route>


          {/* Google Map */}
          <Route path='/google-map-view' element={<Places />} />

          {/* admin routes here */}
          <Route path="/admin" element={<MasterLayout />} >

            <Route index path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='position' element={<PrivateRoute><Position /></PrivateRoute>} />
            <Route path='skill' element={<PrivateRoute><Skill /></PrivateRoute>} />
            <Route path='source' element={<PrivateRoute><Source /></PrivateRoute>} />
            <Route path='employee-list' element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path='employee-details/:id' element={<PrivateRoute><EmployeeDetails /></PrivateRoute>} />
            <Route path='view-certificate/:id' element={<PrivateRoute><ViewCertificate /></PrivateRoute>} />
            <Route path='client-list' element={<PrivateRoute><ClientList /></PrivateRoute>} />
            <Route path='client-details/:id' element={<PrivateRoute><ClientDetails /></PrivateRoute>} />

            {/* mh employee register from admin route here */}
            <Route path='add-mh-employee' element={<PrivateRoute><AddMHEmployee /></PrivateRoute>} />
            <Route path='mh-employee-list' element={<PrivateRoute><MHEmployeeList /></PrivateRoute>} />
            <Route path='edit-mh-employee/:id' element={<PrivateRoute><EditMHEmployee /></PrivateRoute>} />

          </Route>

          {/* for client routes */}
          <Route path="/client" element={<ClientMasterLayout />} >
            <Route path='employee-list' element={<PrivateRoute><ClientEmployeeList /></PrivateRoute>} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;