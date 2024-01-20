package comparator_comparable;

import java.util.Comparator;

public class ComparatorPoint implements Comparator<Student> {
    @Override
    public int compare(Student o1, Student o2) {
        return Double.compare(o1.getPoint(),o2.getPoint());
    }
}
