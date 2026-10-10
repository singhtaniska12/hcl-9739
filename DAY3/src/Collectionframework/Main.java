package Collectionframework;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
   List<Integer> list = new ArrayList<>();

   list.add(1);
   list.add(2);
   list.add(3);
   list.add(4);
   list.add(5);
   list.add(6);
   list.add(7);
   list.add(8);
   list.add(9);
   list.add(10);
    for(int i:list){
        System.out.println(i);
    }
        list.add(2, 25);
        System.out.println(list);
        System.out.println(list.get(2));
        list.set(1, 100);
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
        System.out.println(list.size());
        System.out.println( list.contains(30));



    }



}
