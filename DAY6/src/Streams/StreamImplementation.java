package Streams;
import java.util.ArrayList;

public class StreamImplementation {
     public static void main(String[] args) {
         ArrayList<Integer> list = new ArrayList<>();
         ArrayList<String> list2 = new ArrayList<>();
         list.add(1);
         list.add(2);
         list.add(3);
         list.add(4);
         list.add(5);
         list.add(6);
         list.add(7);
         list.add(8);
         list2.add("Tanu");
         list2.add("Yashi");
         list2.add("Rahul");
         list2.add("Riya");
         list2.add("Aditi");
         list2.add("Aman");
         System.out.println(list.stream().filter(x-> x % 2 == 0).count());
         System.out.println(list.stream().anyMatch(x -> x > 5));
         System.out.println(list.stream().min(Integer::compareTo).get());
         System.out.println(list.stream().max(Integer::compareTo).get());
         System.out.println();
         list.stream().skip(3).forEach(System.out::println);
         System.out.println(list2.stream().findFirst().get());
         list2.stream().forEach(x->System.out.println(x));
         System.out.println();
         list2.stream().filter(x -> x.startsWith("R")).forEach(System.out::println);
         list2.stream().forEach(System.out::println);
         System.out.println();
         list2.stream().sorted().forEach(System.out::println);
         System.out.println();
         list.stream().map(x -> x * 2).forEach(System.out::println);

    }
}
