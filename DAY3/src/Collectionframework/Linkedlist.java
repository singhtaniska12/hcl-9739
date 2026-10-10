package Collectionframework;
import java.util.LinkedList;
import java.util.List;

public class Linkedlist {
   public static void main(String[] args) {
       LinkedList<Integer> list = new LinkedList<>();
       list.add(10);
       list.add(20);
       list.add(30);
       list.add(40);
       list.add(50);
       System.out.println(list);
       list.add(2, 25);
       System.out.println(list);
       list.addFirst(5);
       System.out.println(list);
       list.addLast(60);
       System.out.println( list);
       System.out.println( list.get(2));
       System.out.println( list.getFirst());
       list.set(1, 100);
       System.out.println( list);
       list.remove(2);
       System.out.println( list);
       System.out.println( list.contains(30));
       System.out.println( list.size());
       list.add(30);
       System.out.println(list.indexOf(30));
       System.out.println(list.isEmpty());





   }
}
