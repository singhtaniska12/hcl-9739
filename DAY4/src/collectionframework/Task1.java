package collectionframework;

import java.util.ArrayList;
import java.util.Collections;

class Student implements Comparable<Student> {
    String name;
    int age;
    int roll_no;
    int marks;

    public Student(String name, int age, int roll_no, int marks) {
        this.name = name;
        this.age = age;
        this.roll_no = roll_no;
        this.marks = marks;
    }


    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", roll_no=" + roll_no +
                ", marks=" + marks +
                '}';
    }

    @Override
    public int compareTo(Task1 s) {
        return this.age - s.age;
    }

    public class Task1 {
        public static void main(String[] args) {
            ArrayList<Student> list = new ArrayList<>();
            list.add(new Student("Tanu", 22, 12, 100));
            list.add(new Student("Yashi", 20, 14, 100));
            list.add(new Student("Ram", 23, 15, 98));
            System.out.println(list);
            Collections.sort(list);
            System.out.println(list);


        }
    }
}
