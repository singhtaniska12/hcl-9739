package com.example.hrms.controller;

import com.example.hrms.model.DemoEmployee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Specific component
public class EmployeeController {
    @Autowired
    private DemoEmployee demoEmployee;

    @GetMapping("/")
    public String welcome(){
        return "<h1 style = 'color : purple '>WELCOME TO HRMS APP<h1>" ;
    }

    @GetMapping("/add")
    public int sum(){
        System.out.println("inside /add controller point");
        int result =demoEmployee.add();
        System.out.println("result:"+result);
        return result ;
    }

    @GetMapping("/sqrt")
    public double getSquareRoot(){
        return demoEmployee.squareeoot();
    }
    @GetMapping("/grt")
    public int greater(){
        return demoEmployee.greater();

    }
}