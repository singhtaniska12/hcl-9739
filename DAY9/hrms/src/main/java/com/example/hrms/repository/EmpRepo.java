package com.example.hrms.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface EmpRepo {
    double squareeoot(double d);
    String empData();
    int add(int a, int b);

    int greater(int a, int b);
}
