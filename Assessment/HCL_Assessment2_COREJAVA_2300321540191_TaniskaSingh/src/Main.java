import java.util.Scanner;

public class Main{
     public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         System.out.println("===== LIBRARY MENU ====");
         while (true) {
             System.out.println("1. Add Item");
             System.out.println("2. Register member");
             System.out.println("3. Borrow Item");
             System.out.println("4. Return");
             System.out.println("5. WaitList");
             System.out.println("6.List Items");
             System.out.println("7. Search");
             System.out.println("8. Export Report");
             System.out.println("9. Exit");

             int choice = sc.nextInt();
             if(choice >= 9 || choice < 0) {
                 throw new IllegalArgumentException("Invalid Choice");
             }
         }

    }
}