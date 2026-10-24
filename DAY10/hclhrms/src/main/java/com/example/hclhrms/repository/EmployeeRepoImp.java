package com.example.hclhrms.repository;

import com.example.hclhrms.entity.Employee;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeRepoImp implements EmployeeRepo{
    List<Employee> employeeList = new ArrayList<>() ;
    @Override
    public String addEmp(Employee emp) {
        employeeList.add(emp);
        return "Employee Addded";
    }

    @Override
    public List<Employee> getEmp() {
        return employeeList;
    }

    @Override
    public Employee getEmpById(int emp_id) {
        return employeeList.stream().filter(e -> e.getEmp_id() == emp_id).findFirst().orElse(null);

    }

    @Override
    public String deleteById(int emp_id) {
        if(getEmpById(emp_id) != null){
            boolean status = false;
            if(getEmpById(emp_id) != null){
             status  = employeeList.removeIf(e -> e.getEmp_id() == emp_id);
            }
            if(status){
                return"Employee Deleted Successfully";
            }
            return "Employee is not registered with it " + emp_id;
        }

        return "";
    }

    @Override
    public String updateById(int emp_id) {
        return "";
    }

    @Override
    public String updateById(int emp_id, Employee updatedEmp) {
        Employee existingEmp = getEmpById(emp_id);
        if (existingEmp != null){
            existingEmp.setEmail("abc@gamil.com");
        }

        return "Employee Updated Successfully";
    }



    @Override
    public List<Employee> addAllEmp() {
        List<Employee> ls = new ArrayList<>(List.of(
                new Employee(102, "Priya", "CSE", "Python", "priya@gmail.com"),
                new Employee(103, "Aman", "IT", "MERN", "aman@gmail.com"),
                new Employee(104, "Sneha", "HR", "Java", "sneha@gmail.com"),
                new Employee(105, "Rahul", "DSE", "Spring Boot", "rahul@gmail.com"),
                new Employee(106, "Anjali", "CSE", "React", "anjali@gmail.com"),
                new Employee(107, "Karan", "IT", "SQL", "karan@gmail.com"),
                new Employee(108, "Neha", "DSE", "Java", "neha@gmail.com"),
                new Employee(109, "Arjun", "CSE", "Python", "arjun@gmail.com"),
                new Employee(110, "Pooja", "IT", "Spring Boot", "pooja@gmail.com")
        ));
        return ls ;
    }
}