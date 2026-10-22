package com.example.hrms.model;

import com.example.hrms.repository.EmpRepo;
import com.example.hrms.repository.EmpRepoImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DemoEmployee {

    @Autowired
    private EmpRepoImplementation empRepo;

    public int add(){
        return empRepo.add(40,20);
    }
    public double squareeoot(){
         return empRepo.squareeoot(2000);

    }
    public int greater(){
        return empRepo.greater(10,5);
    }


}
