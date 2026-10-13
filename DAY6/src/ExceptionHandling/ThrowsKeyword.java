package ExceptionHandling;
import java.io.IOException;

public class ThrowsKeyword {
    static void check() throws IOException {
        throw new IOException("File error");
    }

    public static void main(String[] args) {
        try {
            check();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
