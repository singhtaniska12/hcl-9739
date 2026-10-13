package ExceptionHandling;

public class MultipleCatchBlock {
    public static void main(String[] args) {
        try {
            int[] arr = {10, 20, 30};
            int a = 10;
            int b = 0;

            System.out.println(a / b);
            System.out.println(arr[5]);

        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds");

        } catch (Exception e) {
            System.out.println("Some other exception occurred");
        }

        System.out.println("Program continues");
    }

}
