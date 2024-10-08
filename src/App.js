//import logo from './logo.svg';
//import { AppBar } from '@mui/material';
/*import './App.css';
import ReactDOM from 'react-dom/client';
import Appbar from "./components/Appbar";
import NurseAddition from './components/NurseAddition';
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
//import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import AdminLogin from "./pages/AdminLogin"; 
import Chat from "./pages/Chat"; 
import Home from "./pages/Home"; 
import Landing from "./pages/Landing"; 
//import Login from "./pages/Login"; 

import Logout from "./pages/Logout"; 
import MedicalDocuments from "./pages/MedicalDocuments"; 
//import NurseLogin from "./pages/NurseLogin"; 
import NurseRegistration from "./pages/NurseRegistration"; 
import PatientLogin from "./pages/PatientLogin";


import NurseLogin from './components/NurseLogin';
import AdminLogin from './components/AdminLogin';
import MedicalRecords from './components/MedicalRecords';
import PatientMedicalRecords from './components/PatientMedicalRecords';
import MedicalTests from './components/MedicalTests';
import PatientMedicalTests from './components/PatientMedicalTests';
import PatientMedicine from './components/PatientMedicine';
import SinglePatientMedicine from './components/SinglePatientMedicine';
import SpecificPatientMedicine from './components/SpecificPatientMedicine';
import SpecificPatientRecord from './components/SpecificPatientRecord';
import SpecificPatientTest from './components/SpecificPatientTest';
import DeletePatientMedicine from './components/DeletePatientMedicine';
import DeletePatientRecord from './components/DeletePatientRecord';
import DeletePatientTest from './components/DeletePatientTest';
import AddPatientMedicine from './components/AddPatientMedicine';
import AddPatientRecord from './components/AddPatientRecord';
import AddPatientTest from './components/AddPatientTest'
import UpdateNurse from './components/UpdateNurse'
import UpdatePatient from './components/UpdatePatient'


function App() {
  return (
    <Router>
      <Appbar/>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/login">Login</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/register">Register</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/nurse-addition">Nurse Addition</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/nurse-login">Nurse Login</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/admin-login">Admin Login</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/medical-records">Medical Records</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/patient-medical-records">Patient Medical Records</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/medical-tests">Medical Tests</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/patient-medical-tests">Patient Medical Tests</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/All-patient-medicine">All Patient Medicine</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/single-patient-medicine">Single Patient Medicine</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/specific-patient-medicine">Specific Patient Medicine</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/specific-patient-record">Specific Patient Record</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/specific-patient-test">Specific Patient Test</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/delete-patient-medicine">Delete Patient Medicine</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/delete-patient-record">Delete Patient Record</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/delete-patient-test">Delete Patient Test</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/add-patient-medicine">Add Patient Medicine</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/add-patient-test">Add Patient Test</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/add-patient-record">Add Patient Record</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/update-nurse">Update Nurse</Link>
      <div style={{ marginBottom: '100px' }}></div>
      <Link to="/update-patient">Update Patient</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/add-patient-medicine" element={<AddPatientMedicine />} />
        <Route path="/add-patient-test" element={<AddPatientTest />} />
        <Route path="/add-patient-record" element={<AddPatientRecord />} />
        <Route path="/update-nurse" element={<UpdateNurse />} />
        <Route path="/update-patient" element={<UpdatePatient />} />
        <Route path="/" element={<Login />} /> {/* Default route} */
      //</Routes>
     // <div style={{ marginBottom: '100px' }}></div>
   // </Router>
  //);
//}

//export default App;
/*
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./components/Appbar";
import NurseAddition from './components/NurseAddition';
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import PatientLogin from './components/PatientLogin';
import NurseLogin from './components/NurseLogin';
import AdminLogin from './components/AdminLogin';
import MedicalRecords from './components/MedicalRecords';
import PatientMedicalRecords from './components/PatientMedicalRecords';
import MedicalTests from './components/MedicalTests';
import PatientMedicalTests from './components/PatientMedicalTests';
import PatientMedicine from './components/PatientMedicine';
import SinglePatientMedicine from './components/SinglePatientMedicine';
import SpecificPatientMedicine from './components/SpecificPatientMedicine';
import SpecificPatientRecord from './components/SpecificPatientRecord';
import SpecificPatientTest from './components/SpecificPatientTest';
import DeletePatientMedicine from './components/DeletePatientMedicine';
import DeletePatientRecord from './components/DeletePatientRecord';
import DeletePatientTest from './components/DeletePatientTest';
import AddPatientMedicine from './components/AddPatientMedicine';
import AddPatientRecord from './components/AddPatientRecord';
import AddPatientTest from './components/AddPatientTest';
import UpdateNurse from './components/UpdateNurse';
import UpdatePatient from './components/UpdatePatient';
import MainPage from './components/MainPage';
import NurseProfile from './components/NurseProfile';
import AdminProfile from './components/AdminProfile';
import UploadComponent from './components/UploadComponent';
import KnowMore from './components/KnowMore';
import OTPLogin from './components/OTPLogin';
import Profile from './components/Profile';
import PatientViewSingleMedicine from './components/PatientViewSingleMedicine';
import PatientViewMedicalRecord from './components/PatientViewMedicalRecord';
import PatientViewTest from './components/PatientViewTest';
import Chat from './components/Chat';

function App() {
  window.globalVariable = -1;
  return (
    <Router>
      <Appbar/>
      <Routes>
      <Route path="/MainPage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nurse-profile" element={<NurseProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/patient-profile" element={<Profile />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/nurse-addition" element={<NurseAddition />} />
        <Route path="/nurse-login" element={<NurseLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/patient-medical-records" element={<PatientMedicalRecords />} />
        <Route path="/medical-tests" element={<MedicalTests />} />
        <Route path="/patient-medical-tests" element={<PatientMedicalTests />} />
        <Route path="/All-patient-medicine" element={<PatientMedicine />} />
        <Route path="/single-patient-medicine" element={<SinglePatientMedicine />} />
        <Route path="/specific-patient-medicine" element={<SpecificPatientMedicine />} />
        <Route path="/specific-patient-record" element={<SpecificPatientRecord />} />
        <Route path="/specific-patient-test" element={<SpecificPatientTest />} />
        <Route path="/delete-patient-medicine" element={<DeletePatientMedicine />} />
        <Route path="/delete-patient-record" element={<DeletePatientRecord />} />
        <Route path="/delete-patient-test" element={<DeletePatientTest />} />
        <Route path="/add-patient-medicine" element={<AddPatientMedicine />} />
        <Route path="/add-patient-test" element={<AddPatientTest />} />
        <Route path="/add-patient-record" element={<AddPatientRecord />} />
        <Route path="/update-nurse" element={<UpdateNurse />} />
        <Route path="/update-patient" element={<UpdatePatient />} />
        <Route path="/upload-pdf" element={<UploadComponent />} />
        <Route path="/Know-More" element={<KnowMore />} />
        <Route path="/OTP-Login" element={<OTPLogin />} />
        <Route path="/patient-view-medical-record" element={<PatientViewMedicalRecord />} />
        <Route path="/patient-view-medicine-single" element={<PatientViewSingleMedicine />}/>
        <Route path="/patient-view-test" element={<PatientViewTest />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./components/Appbar";
import NurseAddition from './components/NurseAddition';
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import PatientLogin from './components/PatientLogin';
import NurseLogin from './components/NurseLogin';
import AdminLogin from './components/AdminLogin';
import MedicalRecords from './components/MedicalRecords';
import PatientMedicalRecords from './components/PatientMedicalRecords';
import MedicalTests from './components/MedicalTests';
import PatientMedicalTests from './components/PatientMedicalTests';
import PatientMedicine from './components/PatientMedicine';
import SinglePatientMedicine from './components/SinglePatientMedicine';
import SpecificPatientMedicine from './components/SpecificPatientMedicine';
import SpecificPatientRecord from './components/SpecificPatientRecord';
import SpecificPatientTest from './components/SpecificPatientTest';
import DeletePatientMedicine from './components/DeletePatientMedicine';
import DeletePatientRecord from './components/DeletePatientRecord';
import DeletePatientTest from './components/DeletePatientTest';
import AddPatientMedicine from './components/AddPatientMedicine';
import AddPatientRecord from './components/AddPatientRecord';
import AddPatientTest from './components/AddPatientTest';
import UpdateNurse from './components/UpdateNurse';
import UpdatePatient from './components/UpdatePatient';
import MainPage from './components/MainPage';
import NurseProfile from './components/NurseProfile';
import AdminProfile from './components/AdminProfile';
import UploadComponent from './components/UploadComponent';
import KnowMore from './components/KnowMore';
import OTPLogin from './components/OTPLogin';
import Profile from './components/Profile';
import PatientViewSingleMedicine from './components/PatientViewSingleMedicine';
import PatientViewMedicalRecord from './components/PatientViewMedicalRecord';
import PatientViewTest from './components/PatientViewTest';
import PatientRecordPage from './components/PatientRecordPage';
import PatientTestPage from './components/PatientTestPage';
import PatientMedicinePage from './components/PatientMedicinePage';
import Chat from './components/Chat';

function App() {
  window.globalVariable = -1;
  return (
    <Router>
      <Appbar/>
      <Routes>
      <Route path="/MainPage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nurse-profile" element={<NurseProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/patient-profile" element={<Profile />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/nurse-addition" element={<NurseAddition />} />
        <Route path="/patient-record-page" element={<PatientRecordPage />} />
        <Route path="/patient-test-page" element={<PatientTestPage />} />
        <Route path="/patient-medicine-page" element={<PatientMedicinePage />} />
        <Route path="/nurse-login" element={<NurseLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/patient-medical-records" element={<PatientMedicalRecords />} />
        <Route path="/medical-tests" element={<MedicalTests />} />
        <Route path="/patient-medical-tests" element={<PatientMedicalTests />} />
        <Route path="/All-patient-medicine" element={<PatientMedicine />} />
        <Route path="/single-patient-medicine" element={<SinglePatientMedicine />} />
        <Route path="/specific-patient-medicine" element={<SpecificPatientMedicine />} />
        <Route path="/specific-patient-record" element={<SpecificPatientRecord />} />
        <Route path="/specific-patient-test" element={<SpecificPatientTest />} />
        <Route path="/delete-patient-medicine" element={<DeletePatientMedicine />} />
        <Route path="/delete-patient-record" element={<DeletePatientRecord />} />
        <Route path="/delete-patient-test" element={<DeletePatientTest />} />
        <Route path="/add-patient-medicine" element={<AddPatientMedicine />} />
        <Route path="/add-patient-test" element={<AddPatientTest />} />
        <Route path="/add-patient-record" element={<AddPatientRecord />} />
        <Route path="/update-nurse" element={<UpdateNurse />} />
        <Route path="/update-patient" element={<UpdatePatient />} />
        <Route path="/upload-pdf" element={<UploadComponent />} />
        <Route path="/Know-More" element={<KnowMore />} />
        <Route path="/OTP-Login" element={<OTPLogin />} />
        <Route path="/patient-view-medical-record" element={<PatientViewMedicalRecord />} />
        <Route path="/patient-view-medicine-single" element={<PatientViewSingleMedicine />}/>
        <Route path="/patient-view-test" element={<PatientViewTest />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;