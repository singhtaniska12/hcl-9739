// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [empid, setEmpid] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const payload = {};
      if (empid) payload.emp_id = Number(empid);
      if (email) payload.email = email;

      const response = await fetch("http://localhost:8080/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const text = await response.text();

      if (response.ok && text.toLowerCase().includes("successful")) {
        setIsSuccess(true);
        setMessage("Login successful! Redirecting to dashboard...");

        // Save session details to localStorage
        localStorage.setItem("user", JSON.stringify({
          emp_id: empid ? Number(empid) : null,
          email: email
        }));

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setIsSuccess(false);
        setMessage(text || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsSuccess(false);
      setMessage("Cannot connect to server. Ensure backend is running on port 8080.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "480px" }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Employee Login</h2>

          {message && (
            <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`} role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="loginEmpId" className="form-label">Employee ID</label>
              <input
                type="number"
                value={empid}
                onChange={(e) => setEmpid(e.target.value)}
                className="form-control"
                id="loginEmpId"
                placeholder="Enter Employee ID"
              />
              <small className="text-muted">Optional if email is provided</small>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="loginEmail" className="form-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="loginEmail"
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Verifying..." : "Login"}
            </button>

            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Link to="/registration">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;