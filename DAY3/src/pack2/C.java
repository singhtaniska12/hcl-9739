package pack2;

public class C implements Interface , InterfaceB {
    public void m1(){
        System.out.println("InterfaceA");
    }
    public void m2(){
        System.out.println("InterfaceB");
    }
    public static void main(String[] args){
        C c = new C() ;
        c.m1() ;
        c.m2();
    }
}