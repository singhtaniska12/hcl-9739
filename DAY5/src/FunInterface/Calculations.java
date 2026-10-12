package FunInterface;

public class Calculations {
    public static void main(String[] args) {
        Calculator add = (int a, int b) -> a + b;
        Calculator sub = (int a, int b) -> a - b;
        Calculator multi = (int a, int b) -> a * b;
        Calculator div = (int a, int b) -> a / b;

        System.out.println("Addition: " + add.calculate(10, 10));
        System.out.println("Subtraction: " + sub.calculate(400, 20));
        System.out.println("Multiplication: " + multi.calculate(30, 5));
        System.out.println("Division: " + div.calculate(20, 5));
    }
}
