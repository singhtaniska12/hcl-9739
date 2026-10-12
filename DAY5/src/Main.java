import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();

        list.add(50);
        list.add(10);
        list.add(40);
        list.add(20);

        Comparator<Integer> c = (a, b) -> Integer.compare(a, b);

        Collections.sort(list, c);

        System.out.println(list);
    }
}