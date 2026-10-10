
package Collectionframework;

public class Vector {
    public static void main(String[] args) {

        java.util.Vector<Integer> vector = new java.util.Vector<>();

        vector.add(10);
        vector.add(20);
        vector.add(30);
        vector.add(40);
        System.out.println( vector);

        vector.addElement(50);
        System.out.println( vector);

        vector.insertElementAt(15, 1);
        System.out.println( vector);

        System.out.println( vector.get(2));

        System.out.println( vector.firstElement());

        System.out.println( vector.lastElement());

        vector.set(1, 100);
        System.out.println( vector);

        vector.setElementAt(200, 2);
        System.out.println( vector);

        vector.remove(0);
        System.out.println(vector);

        vector.removeElement(30);
        System.out.println( vector);

        vector.removeElementAt(0);
        System.out.println(  vector);

        System.out.println( vector.contains(40));

        System.out.println( vector.indexOf(40));

        System.out.println( vector.lastIndexOf(40));

        System.out.println( vector.size());

        System.out.println(vector.capacity());

        System.out.println( vector.isEmpty());

        vector.ensureCapacity(20);
        System.out.println( vector.capacity());

        vector.trimToSize();
        System.out.println( vector.capacity());

        java.util.Vector<Integer> anotherVector = new java.util.Vector<>();
        anotherVector.add(60);
        anotherVector.add(70);

        vector.addAll(anotherVector);
        System.out.println("After addAll: " + vector);

        System.out.println("Contains all: " + vector.containsAll(anotherVector));

        vector.removeAll(anotherVector);
        System.out.println("After removeAll: " + vector);

        vector.addAll(anotherVector);
        vector.retainAll(anotherVector);
        System.out.println("After retainAll: " + vector);

        Object[] array = vector.toArray();
        System.out.print("Array: ");
        for (Object element : array) {
            System.out.print(element + " ");
        }
        System.out.println();

        System.out.println(vector.subList(0, vector.size()));

        System.out.println("Elements using for loop:");
        for (int i = 0; i < vector.size(); i++) {
            System.out.println(vector.get(i));
        }

        System.out.println("Elements using for-each:");
        for (int element : vector) {
            System.out.println(element);
        }

        vector.forEach(element -> System.out.println(element));

        vector.removeIf(element -> element > 60);
        System.out.println( vector);

        vector.replaceAll(element -> element * 2);
        System.out.println( vector);

        vector.sort(java.util.Collections.reverseOrder());
        System.out.println(vector);

        java.util.Enumeration<Integer> enumeration = vector.elements();
        System.out.print("Enumeration: ");
        while (enumeration.hasMoreElements()) {
            System.out.print(enumeration.nextElement() + " ");
        }
        System.out.println();

        java.util.Iterator<Integer> iterator = vector.iterator();
        System.out.print("Iterator: ");
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();

        java.util.Vector<Integer> clonedVector =
                (java.util.Vector<Integer>) vector.clone();
        System.out.println(clonedVector);

        vector.clear();
        System.out.println( vector);

        System.out.println( vector.isEmpty());
    }
}
