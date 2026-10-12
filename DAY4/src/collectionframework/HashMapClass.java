package collectionframework;

import java.util.HashMap;

public class HashMapClass {
    public static void main(String[] args) {
        HashMap<String,String> map = new HashMap<String,String>();
        map.put("1", "Mango");
        map.put("2", "Apple");
        map.put("3", "Banana");
        System.out.println(map);
        System.out.println(map.get("1"));
        System.out.println(map.containsKey("2"));
    }

}
