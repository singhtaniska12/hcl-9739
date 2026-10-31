package com.example.hrmsdatabase.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attendanceId;

    @ManyToOne
    @JoinColumn(name = "empid", nullable = false)
    private com.example.hrmsdatabase.model.Employee employee;

    @Column(nullable = false)
    private LocalDate attendanceDate;

    private LocalDateTime inTime;
    private LocalDateTime outTime;
    private String comment;

    public Long getAttendanceId() {
        return attendanceId;
    }

    public com.example.hrmsdatabase.model.Employee getEmployee() {
        return employee;
    }

    public void setEmployee(com.example.hrmsdatabase.model.Employee employee) {

        this.employee = employee;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public LocalDateTime getInTime() {
        return inTime;
    }

    public void setInTime(LocalDateTime inTime) {
        this.inTime = inTime;
    }

    public LocalDateTime getOutTime() {
        return outTime;
    }

    public void setOutTime(LocalDateTime outTime) {
        this.outTime = outTime;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}