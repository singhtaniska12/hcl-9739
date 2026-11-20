/* eslint-disable react-hooks/set-state-in-effect */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [empId, setEmpId] = useState("");
  const [comment, setComment] = useState("");
  const [markStatus, setMarkStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loadingAction, setLoadingAction] = useState(""); // 'in' or 'out'
  const [attendanceList, setAttendanceList] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        if (parsed.emp_id) {
          setEmpId(parsed.emp_id);
        }
      } catch (err) {
        console.error("Failed to parse user session", err);
      }
    }
    fetchAttendance();
  }, []);

  async function fetchAttendance() {
    setLoadingList(true);
    try {
      const res = await fetch("http://localhost:8080/attendance");
      if (res.ok) {
        const data = await res.json();
        setAttendanceList(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Error fetching attendance list:", err);
    } finally {
      setLoadingList(false);
    }
  }

  // Handle Check-In (In Time)
  async function handleCheckIn(e) {
    if (e) e.preventDefault();
    setMarkStatus("");

    const targetEmpId = empId || user?.emp_id;
    if (!targetEmpId) {
      setStatusType("danger");
      setMarkStatus("Please enter an Employee ID.");
      return;
    }

    setLoadingAction("in");

    try {
      const response = await fetch("http://localhost:8080/markattendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee: {
            emp_id: Number(targetEmpId)
          },
          comment: comment.trim() || "Checked in"
        })
      });

      const text = await response.text();

      if (response.status === 201 || text.toLowerCase().includes("successfully")) {
        setStatusType("success");
        setMarkStatus("Check-In successful! In Time recorded.");
        setComment("");
        fetchAttendance();
      } else if (response.status === 409 || text.toLowerCase().includes("already")) {
        setStatusType("warning");
        setMarkStatus("Already checked in for today.");
      } else if (response.status === 404) {
        setStatusType("danger");
        setMarkStatus(`Employee not found with ID: ${targetEmpId}`);
      } else {
        setStatusType("danger");
        setMarkStatus(text || "Failed to check in.");
      }
    } catch (error) {
      console.error("Error during check-in:", error);
      setStatusType("danger");
      setMarkStatus("Failed to connect to backend server.");
    } finally {
      setLoadingAction("");
    }
  }

  // Handle Check-Out (Out Time)
  async function handleCheckOut(e) {
    if (e) e.preventDefault();
    setMarkStatus("");

    const targetEmpId = empId || user?.emp_id;
    if (!targetEmpId) {
      setStatusType("danger");
      setMarkStatus("Please enter an Employee ID.");
      return;
    }

    setLoadingAction("out");

    try {
      const response = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee: {
            emp_id: Number(targetEmpId)
          },
          comment: comment.trim() || "Checked out"
        })
      });

      const text = await response.text();

      if (response.ok) {
        setStatusType("success");
        setMarkStatus("Check-Out successful! Out Time recorded.");
        setComment("");
        fetchAttendance();
      } else if (response.status === 409 || text.toLowerCase().includes("already")) {
        setStatusType("warning");
        setMarkStatus(text || "Check-Out already recorded for today.");
      } else if (response.status === 404) {
        setStatusType("danger");
        setMarkStatus(text || "No check-in record found for today. Please check in first.");
      } else {
        setStatusType("danger");
        setMarkStatus(text || "Failed to check out.");
      }
    } catch (error) {
      console.error("Error during check-out:", error);
      setStatusType("danger");
      setMarkStatus("Failed to connect to backend server.");
    } finally {
      setLoadingAction("");
    }
  }

  function formatTime(isoString) {
    if (!isoString) return null;
    try {
      return new Date(isoString).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch {
      return isoString;
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="container mt-4 mb-5">
      {/* Header / Navbar */}
      <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
        <div>
          <h2 className="mb-0">HRMS Attendance Dashboard</h2>
          {user && (
            <small className="text-muted">
              Logged in as: <strong>{user.email || `Emp #${user.emp_id}`}</strong>
            </small>
          )}
        </div>
        <div>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* Attendance Action Card */}
        <div className="col-lg-5">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Mark Attendance (In / Out)</h5>
            </div>
            <div className="card-body p-4">
              {markStatus && (
                <div className={`alert alert-${statusType}`} role="alert">
                  {markStatus}
                </div>
              )}

              <div>
                <div className="mb-3">
                  <label htmlFor="dashEmpId" className="form-label">Employee ID</label>
                  <input
                    type="number"
                    id="dashEmpId"
                    value={empId}
                    onChange={(e) => setEmpId(e.target.value)}
                    className="form-control"
                    placeholder="Enter Employee ID (e.g. 101)"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dashComment" className="form-label">Comment / Note</label>
                  <input
                    type="text"
                    id="dashComment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="form-control"
                    placeholder="e.g. Work from office, remote..."
                  />
                </div>

                {/* Two Action Buttons: Check In and Check Out */}
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-success btn-lg"
                    onClick={handleCheckIn}
                    disabled={loadingAction !== ""}
                  >
                    {loadingAction === "in" ? "Recording In Time..." : "Check In (Record In Time)"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning btn-lg text-dark"
                    onClick={handleCheckOut}
                    disabled={loadingAction !== ""}
                  >
                    {loadingAction === "out" ? "Recording Out Time..." : "Check Out (Record Out Time)"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Records List */}
        <div className="col-lg-7">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Today's Attendance Status</h5>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={fetchAttendance}
                disabled={loadingList}
              >
                {loadingList ? "Refreshing..." : "Refresh"}
              </button>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped table-hover mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Emp ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>In Time</th>
                      <th>Out Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceList.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4 text-muted">
                          {loadingList ? "Loading records..." : "No attendance records found."}
                        </td>
                      </tr>
                    ) : (
                      attendanceList.map((item, index) => {
                        const inFormatted = formatTime(item.inTime);
                        const outFormatted = formatTime(item.outTime);

                        return (
                          <tr key={item.attendanceId || index}>
                            <td>
                              <span className="badge bg-secondary">
                                {item.employee?.emp_id}
                              </span>
                            </td>
                            <td>{item.employee?.emp_name || "-"}</td>
                            <td>{item.attendancedate}</td>
                            <td>
                              {inFormatted ? (
                                <span className="text-success fw-bold">{inFormatted}</span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td>
                              {outFormatted ? (
                                <span className="text-danger fw-bold">{outFormatted}</span>
                              ) : (
                                <span className="badge bg-warning text-dark">Active</span>
                              )}
                            </td>
                            <td>
                              {outFormatted ? (
                                <span className="badge bg-success">Completed</span>
                              ) : inFormatted ? (
                                <span className="badge bg-primary">Checked In</span>
                              ) : (
                                <span className="badge bg-secondary">Pending</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;