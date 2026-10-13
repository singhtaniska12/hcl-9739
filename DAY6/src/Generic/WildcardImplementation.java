package Generic;
import java.util.*;

public class WildcardImplementation {
    public static void display(List<?> list) {
        for (Object value : list) {
            System.out.println(value);
        }
    }

    public static void main(String[] args) {
        List<Integer> l1 = Arrays.asList(10, 20, 30);
        List<String> l2 = Arrays.asList("Java", "Python", "C++");

        display(l1);
        display(l2);
    }
}
