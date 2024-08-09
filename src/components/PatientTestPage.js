import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const PatientTestPage = () => {
  
  return (
    <div className="patient-page-container">
     

      

      <div className="card-container">
        <Link to="/medical-tests">
          <div className="card">Medical Tests</div>
        </Link>

        <Link to="/patient-medical-tests">
          <div className="card">Patient Medical Tests</div>
        </Link>

        <Link to="/add-patient-test">
          <div className="card">Add Patient Test</div>
        </Link>

        <Link to="/specific-patient-Test">
          <div className="card">Specific Patient Test</div>
        </Link>

        <Link to="/delete-patient-Test">
          <div className="card">Delete Patient Test</div>
        </Link>
      </div>
    </div>
  );
};

export default PatientTestPage;