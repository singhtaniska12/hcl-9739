package com.example.hrmsdatabase.service;

import com.example.hrmsdatabase.model.Employee;
import com.example.hrmsdatabase.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long empId) {
        return employeeRepository.findById(empId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public Employee updateEmployee(Long empId, Employee employee) {
        Employee existingEmployee = getEmployeeById(empId);

        existingEmployee.setEmp_name(employee.getEmp_name());
        existingEmployee.setDesignation(employee.getDesignation());
        existingEmployee.setStack(employee.getStack());
        existingEmployee.setEmail(employee.getEmail());

        if (employee.getPassword() != null && !employee.getPassword().isBlank()) {
            existingEmployee.setPassword(employee.getPassword());
        }

        return employeeRepository.save(existingEmployee);
    }

    public String deleteEmployee(Long empId) {
        Employee employee = getEmployeeById(empId);
        employeeRepository.delete(employee);
        return "Employee deleted successfully";
    }
}