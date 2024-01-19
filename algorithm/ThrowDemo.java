public class ThrowDemo{
    public static void main(String[] args) {
        int age = -5;

        if (age < 0) {
            throw new IllegalArgumentException("Tuổi không thể là số âm");
        }
    }
}

//throw được sử dụng để ném một ngoại lệ cụ thể tại một điểm cụ thể trong chương trình.