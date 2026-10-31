package com.example.hrmsdatabase.service;

import com.example.hrmsdatabase.model.Attendance;
import com.example.hrmsdatabase.model.Employee;
import com.example.hrmsdatabase.repository.AttendanceRepository;
import com.example.hrmsdatabase.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final EmployeeRepository employeeRepository;

    public AttendanceService(
            AttendanceRepository attendanceRepository,
            EmployeeRepository employeeRepository) {
        this.attendanceRepository = attendanceRepository;
        this.employeeRepository = employeeRepository;
    }

    @Transactional
    public String checkIn(Long empId) {
        Employee employee = employeeRepository.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        LocalDate today = LocalDate.now();

        if (attendanceRepository.findByEmployeeAndAttendanceDate(employee, today).isPresent()) {
            return "Attendance already marked for today";
        }

        Attendance attendance = new Attendance();
        attendance.setEmployee(employee);
        attendance.setAttendanceDate(today);
        attendance.setInTime(LocalDateTime.now());
        attendance.setComment("Present");

        attendanceRepository.save(attendance);

        return "Checked in successfully";
    }

    @Transactional
    public String checkOut(Long empId) {
        Employee employee = employeeRepository.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        Attendance attendance = attendanceRepository
                .findByEmployeeAndAttendanceDate(employee, LocalDate.now())
                .orElseThrow(() -> new RuntimeException("Check in first"));

        if (attendance.getOutTime() != null) {
            return "Already checked out";
        }

        attendance.setOutTime(LocalDateTime.now());
        attendanceRepository.save(attendance);

        return "Checked out successfully";
    }
}