package Model;
public class LibraryItems {
   private  int id;
   private String title;
   private int year;
   private String available;

abstract class LibraryItem implements Comparable<LibraryItem>{}
    public LibraryItems(int id, String title, int year, String available) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.available = available;
        if(title.isEmpty()){
            System.out.println("Title is empty");
        }
        if(year<1900 && year>2026){
            System.out.println("Year is out of range");
        }
    }
    @Override
    public boolean equals(Object obj) {
        return this.id=obj.id;
    }
}
