import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStateProvider } from './components/GlobalStateProvider';
//import reportWebVitals from './reportWebVitals';
//import ReactDOM from "react-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
/*
import AdminLogin from "./pages/AdminLogin"; 
import Chat from "./pages/Chat"; 
import Home from "./pages/Home"; 
import Landing from "./pages/Landing"; 
import Login from "./pages/Login"; 

import Logout from "./pages/Logout"; 
import MedicalDocuments from "./pages/MedicalDocuments"; 
import NurseLogin from "./pages/NurseLogin"; 
import NurseRegistration from "./pages/NurseRegistration"; 
import PatientLogin from "./pages/PatientLogin";

import PatientRegistration from "./pages/PatientRegistration"; 
import Profile from "./pages/Profile"; 
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStateProvider>
  
    <App />
    </GlobalStateProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/*
function A() {   
  return (     
  <BrowserRouter>       
  <Routes>         
    <Route path="/" element={<Landing />}>           
    <Route index element={<Login />} />           
    <Route path="Home" element={<Home />} />           
    <Route path="Profile" element={<Profile />} />           
    <Route path="Logout" element={<Logout />} />         
    </Route>       
    </Routes>     
    </BrowserRouter>   
    ); 
  } 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<A />);
*/