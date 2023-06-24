import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

import PrivateRoute from './routes/PrivateRoute';

import Dashboard from './components/admin/Dashboard';
import ClientDetails from './components/admin/client/ClientDetails';
import ClientList from './components/admin/client/ClientList';
import EmployeeDetails from './components/admin/employee/EmployeeDetails';
import EmployeeList from './components/admin/employee/EmployeeList';
import AddMHEmployee from './components/admin/mhEmployee/AddMHEmployee';
import EditMHEmployee from './components/admin/mhEmployee/EditMHEmployee';
import Position from './components/admin/position/Position';
import Skill from './components/admin/skill/Skill';
import Source from './components/admin/source/Source';
import AdminLogin from './components/frontend/auth/AdminLogin';
import RegisterWelcome from './components/frontend/profile/RegisterWelcome';
import EmployeeRegister from './components/frontend/register/EmployeeRegister';
import MasterLayout from './layouts/admin/MasterLayout';

//For client
import ChangePassword from './components/admin/ChangePassword';
import ContactList from './components/admin/contact/ContactList';
import ViewCertificate from './components/admin/employee/ViewCertificate';
import ViewEmployeeDetails from './components/admin/employee/ViewEmployeeDetails';
import AddInvoice from './components/admin/invoice/AddInvoice';
import InvoiceList from './components/admin/invoice/InvoiceList';
import MHEmployeeList from './components/admin/mhEmployee/MHEmployeeList';
import NotificationList from './components/admin/notification/NotificationList';
import ClientEmployeeList from './components/client/employee/EmployeeList';
import Home from './components/frontend/Home/Home';
import About from './components/frontend/about/About';
import Blog from './components/frontend/blog/Blog';
import Career from './components/frontend/career/Career';
import CheckInCheckOut from './components/frontend/client/CheckInCheckOut';
import MyEmployee from './components/frontend/client/MyEmployee';
import Contact from './components/frontend/contact/Contact';
import Customer from './components/frontend/customer/Customer';
import ClientDashboard from './components/frontend/dashboard/ClientDashboard';
import EmployeeViewDetails from './components/frontend/dashboard/EmployeeViewDetails';
import EmployeeMeeting from './components/frontend/employee/meeting/EmployeeMeeting';
import EmployeePdf from './components/frontend/employee/pdf/EmployeePdf';
import EmployeeProfile from './components/frontend/employee/profile/EmployeeProfile';
import Faq from './components/frontend/faq/Faq';
import PaymentInvoice from './components/frontend/invoicePayment/PaymentInvoice';
import CorporateInformation from './components/frontend/legal/CorporateInformation';
import Privacy from './components/frontend/legal/Privacy';
import TermsOfUse from './components/frontend/legal/TermsOfUse';
import Login from './components/frontend/login/Login';
import Places from './components/frontend/map/Places';
import MeetTheTeam from './components/frontend/meetTeam/MeetTheTeam';
import Mission from './components/frontend/mission/Mission';
import ClientRegister from './components/frontend/register/ClientRegister';
import Payroll from './components/frontend/services/Payroll';
import Recruiting from './components/frontend/services/Recruiting';
import Services from './components/frontend/services/Services';
import StrategyConsultancy from './components/frontend/services/StrategyConsultancy';
import ShortList from './components/frontend/shortList/ShortList';
import ClientMasterLayout from './layouts/frontend/ClientMasterLayout';
import DashboardLayout from './layouts/frontend/dashboard/DashboardLayout';
import AddMeet from './components/admin/meet/AddMeet';
import ViewMeet from './components/admin/meet/ViewMeet';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employee-register' element={<EmployeeRegister />} />
          <Route path='/client-register' element={<ClientRegister />} />
          <Route path='/register-welcome' element={<RegisterWelcome />} />

          <Route path="/" element={<DashboardLayout />} >
            <Route index path='client-dashboard' element={<ClientDashboard />} />
            <Route path='client-myemployee' element={<MyEmployee />} />
            <Route path='dashboard-history' element={<CheckInCheckOut />} />
            <Route path='employee-view-details/:id' element={<EmployeeViewDetails />} />
            <Route path='short-list' element={<ShortList />} />
            <Route path='payment-invoice' element={<PaymentInvoice />} />
          </Route>

          <Route path="/" element={<ClientMasterLayout />} >
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/career' element={<Career />} />
            <Route path='/our-services' element={<Services />} />
            <Route path='/our-mission' element={<Mission />} />
            <Route path='/payroll-services' element={<Payroll />} />
            <Route path='/recruiting-services' element={<Recruiting />} />
            <Route path='/strategy-consultancy-services' element={<StrategyConsultancy />} />
            <Route path='/meet-the-team' element={<MeetTheTeam />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/corporate-information' element={<CorporateInformation />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/privacy' element={<Privacy />} />

            {/* //For Employee Section */}
            <Route path='/employee-profile' element={<EmployeeProfile />} />
            <Route path='/employee-meeting' element={<EmployeeMeeting />} />
            <Route path='/employee-pdf' element={<EmployeePdf />} />
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
            <Route path='view-employee-details/:id' element={<PrivateRoute><ViewEmployeeDetails /></PrivateRoute>} />
            <Route path='view-certificate/:id' element={<PrivateRoute><ViewCertificate /></PrivateRoute>} />
            <Route path='client-list' element={<PrivateRoute><ClientList /></PrivateRoute>} />
            <Route path='client-details/:id' element={<PrivateRoute><ClientDetails /></PrivateRoute>} />
            <Route path='create-meet' element={<PrivateRoute><AddMeet /></PrivateRoute>} />
            <Route path='get-meets' element={<PrivateRoute><ViewMeet /></PrivateRoute>} />
            {/* mh employee register from admin route here */}
            <Route path='add-mh-employee' element={<PrivateRoute><AddMHEmployee /></PrivateRoute>} />
            <Route path='mh-employee-list' element={<PrivateRoute><MHEmployeeList /></PrivateRoute>} />
            <Route path='edit-mh-employee/:id' element={<PrivateRoute><EditMHEmployee /></PrivateRoute>} />

            <Route path='contact-list' element={<PrivateRoute><ContactList /></PrivateRoute>} />
            <Route path='invoice-list' element={<PrivateRoute><InvoiceList /></PrivateRoute>} />
            <Route path='add-invoice' element={<PrivateRoute><AddInvoice /></PrivateRoute>} />
            <Route path='notification-list' element={<PrivateRoute><NotificationList /></PrivateRoute>} />
            <Route path='change-password' element={<PrivateRoute><ChangePassword /></PrivateRoute>} />

          </Route>

          {/* for client routes */}
          <Route path="/client" element={<ClientMasterLayout />} >
            <Route path='employee-list' element={<PrivateRoute><ClientEmployeeList /></PrivateRoute>} />
          </Route>

        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;