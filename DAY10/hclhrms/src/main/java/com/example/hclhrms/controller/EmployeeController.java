package com.example.hclhrms.controller;

import com.example.hclhrms.entity.Employee;
import com.example.hclhrms.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService ;


    @GetMapping("/add")
    public String addNewEmployee(){
        return employeeService.addEmp();
    }

    @GetMapping("/")
    public String defaultMssg(){
        return "<h1>Welcome to ABES Engineering College </h1>" ;
    }

    @GetMapping("/getemp")
    public List<Employee> getEmp(){
        return employeeService.getEmp();
    }

    @GetMapping("/id")
    public Employee getEmpById(){
        return employeeService.getEmpById();
    }

    @GetMapping("/getall")
    public  List<Employee> getAllEmp(){
        return employeeService.getAllmp() ;
    }
    @DeleteMapping("/deleteById")
    public String deleteById(){
        return employeeService.deleteById();

    }
    @PutMapping("/updatedById")
    public String updateById(){
        return employeeService.updatedById();

    }
}