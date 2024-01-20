package comparator_comparable;

public class Student implements  Comparable<Student>{
    //Implement interface Comparable trong Class Student
    private Integer id;
    private String name;
    private Double point;

    public Student(Integer id, String name, Double point) {
        this.id = id;
        this.name = name;
        this.point = point;
    }

    @Override
    public int compareTo(Student o) {
        //Triển khai phương thức compareTo
        //Lọc điểm theo từ cao đến thấp
        return Double.compare(o.point, this.point);
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPoint() {
        return point;
    }

    public void setPoint(Double point) {
        this.point = point;
    }
}
