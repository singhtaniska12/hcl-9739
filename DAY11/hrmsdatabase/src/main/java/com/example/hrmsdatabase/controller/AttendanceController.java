package com.example.hrmsdatabase.controller;

import com.example.hrmsdatabase.service.AttendanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/user/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @PostMapping("/{empId}/checkin")
    public String checkIn(@PathVariable Long empId) {
        return attendanceService.checkIn(empId);
    }

    @PutMapping("/{empId}/checkout")
    public String checkOut(@PathVariable Long empId) {
        return attendanceService.checkOut(empId);
    }
}