// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [stack, setStack] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function sendData(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/v1/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emp_id: Number(empid),
          emp_name: name,
          designation: designation,
          progStack: stack,
          email: email
        })
      });

      const text = await response.text();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(text || "Employee added successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setIsSuccess(false);
        setMessage(text || "Failed to register employee.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setIsSuccess(false);
      setMessage("Error connecting to server. Is backend running on port 8080?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Employee Registration</h2>

          {message && (
            <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">
              {message}
            </div>
          )}

          <form onSubmit={sendData}>
            <div className="form-group mb-3">
              <label htmlFor="empId" className="form-label">Employee ID</label>
              <input
                type="number"
                value={empid}
                onChange={(e) => setEmpid(e.target.value)}
                className="form-control"
                id="empId"
                placeholder="Enter Employee ID (e.g. 101)"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="designation" className="form-label">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="form-control"
                id="designation"
                placeholder="e.g. Developer, QA, Manager"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="stack" className="form-label">Technology Stack</label>
              <select
                className="form-select"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                id="stack"
                required
              >
                <option value="">Select your stack</option>
                <option value="Java Full Stack">Java Full Stack</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Python Full Stack">Python Full Stack</option>
                <option value=".NET Full Stack">.NET Full Stack</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter password"
                minLength="6"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            <div className="text-center mt-3">
              <span>Already registered? </span>
              <Link to="/login">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;