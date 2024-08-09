import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const PatientMedicinePage = () => {
  

  return (
    <div className="patient-page-container">
      <header className="header">Patient Medicine</header>
      
      

      

      <div className="card-container">
        <Link to="/all-patient-medicine">
          <div className="card">All patient Medicine</div>
        </Link>

        <Link to="/single-patient-medicine">
          <div className="card">Single Patient Medicine</div>
        </Link>

       

        <Link to="/specific-patient-medicine">
          <div className="card">Specific Patient Medicine</div>
        </Link>

        <Link to="/add-patient-medicine">
          <div className="card">Add Patient Medicine</div>
        </Link>

        <Link to="/delete-patient-medicine">
          <div className="card">Delete Patient Medicine</div>
        </Link>
      </div>
    </div>
  );
};

export default PatientMedicinePage;