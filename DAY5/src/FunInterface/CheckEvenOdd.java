package FunInterface;

public class CheckEvenOdd {
    public static void main(String[] args) {
        EvenOdd even = n -> n % 2 == 0;

        int n = 11;

        if (even.check(n)) {
            System.out.println(n + " is Even");
        } else {
            System.out.println(n + " is Odd");
        }
    }
}