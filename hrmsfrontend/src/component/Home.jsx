// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5 text-center">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-primary mb-3">HRMS Portal</h1>
          <p className="col-md-8 fs-4 mx-auto text-secondary mb-4">
            Manage employee records and track daily attendance with ease.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Employee Login
            </Link>
            <Link to="/registration" className="btn btn-outline-secondary btn-lg px-4">
              Register New Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;