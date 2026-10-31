package com.example.hrmsdatabase.repository;

import com.example.hrmsdatabase.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}