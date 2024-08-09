import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
//import { useHistory } from 'react-router-dom';
const PatientRecordPage = () => {
 
  return (
    <div className="patient-page-container">
      

      

      <div className="card-container">

      <Link to="/medical-records">
          <div className="card">All Patient Medical Records</div>
        </Link>

        <Link to="/patient-medical-records">
          <div className="card">Patient Medical Records</div>
        </Link>

        <Link to="/add-patient-record">
          <div className="card">Add Patient Record</div>
        </Link>


        <Link to="/specific-patient-record">
          <div className="card">Specific Patient Record</div>
        </Link>

        <Link to="/delete-patient-record">
          <div className="card">Delete Patient Record</div>
        </Link>
      </div>
    </div>
  );
};

export default PatientRecordPage;