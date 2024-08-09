import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
//import { useHistory } from 'react-router-dom';
const NursePage = () => {
 
  return (
    <div className="patient-page-container">
    
      <div className="card-container">
        <Link to="/nurse-addition">
          <div className="card">Add Nurse</div>
        </Link>

        
      </div>
    </div>
  );
};

export default NursePage;