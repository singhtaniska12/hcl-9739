package Model;

public class Book  extends LibraryItems{
    String author;
    String ISBN;




    @Override
    public String toString() {
        return "Book{" +
                "author='" + author + '\'' +
                ", ISBN='" + ISBN + '\'' +
                '}';
    }
}
