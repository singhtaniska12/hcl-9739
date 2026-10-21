package com.example.fielddi;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Employee emp =  context.getBean(Employee.class);
        String result= emp.displayAddress();
        System.out.println(result);
    }
}
