package Collectionframework;

public class Stack {
    public static void main(String[] args) {

        java.util.Stack<Integer> stack = new java.util.Stack<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        System.out.println( stack);

        System.out.println( stack.peek());

        System.out.println( stack.pop());
        System.out.println( stack);

        System.out.println( stack.search(20));

        System.out.println( stack.empty());

        stack.push(50);
        System.out.println( stack);

        System.out.println( stack.size());

        System.out.println( stack.contains(10));

        System.out.println( stack.get(0));

        stack.set(0, 100);
        System.out.println(stack);

        stack.remove(0);
        System.out.println( stack);

        stack.clear();
        System.out.println( stack);

        System.out.println( stack.empty());
    }
}