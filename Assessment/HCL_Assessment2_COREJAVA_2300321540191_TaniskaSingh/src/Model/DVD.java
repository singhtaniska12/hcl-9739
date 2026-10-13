package Model;

public class DVD extends LibraryItems {
    int  DurationMinutes;

    public DVD(int id, String title, int year, String available, int durationMinutes) {
        super(id, title, year, available);
        DurationMinutes = durationMinutes;
    }
    @Override
    double lateFee(int daysLate){
        return 5.0;
    }

    @Override
    public String toString() {
        return "DVD{" +
                "DurationMinutes=" + DurationMinutes +
                '}';
    }
}
