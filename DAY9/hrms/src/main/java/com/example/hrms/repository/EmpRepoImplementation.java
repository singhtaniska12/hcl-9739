package com.example.hrms.repository;

import org.springframework.stereotype.Component;

@Component
public class EmpRepoImplementation implements EmpRepo {

    @Override
    public double squareeoot(double d) {
        double result = Math.sqrt(d);
        return result;
    }

    @Override
    public String empData() {
        return "";
    }

    @Override
    public int add(int a, int b) {
        return a+b;
    }

    @Override
    public int greater(int a, int b) {
        return a>b?a:b;
    }
}
