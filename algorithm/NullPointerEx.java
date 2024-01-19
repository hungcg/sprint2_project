public class NullPointerEx {
    public static void main(String[] args) {
        // Khai báo một biến tham chiếu kiểu String nhưng không khởi tạo
        String str = null;

        // Thử truy cập phương thức của đối tượng null
        int length = str.length(); // Dòng này sẽ ném ra NullPointerException
    }
}
