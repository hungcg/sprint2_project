package comparator_comparable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        System.out.println("Comparable");
        List<Student> s = new ArrayList<>();
        s.add(new Student(1,"A",1.1));
        s.add(new Student(2,"B",2.1));
        s.add(new Student(3,"C",3.1));
        Collections.sort(s);
        for (Student student : s) {
            System.out.println(student.getName() + ":" +student.getPoint());
        }
        System.out.println("---------");
        System.out.println("Comparator");
        ComparatorPoint comparatorPoint = new ComparatorPoint();
        s.sort(comparatorPoint);
        for (Student student: s) {
            System.out.println(student.getName() + ":" +student.getPoint());
        }
    }
}
