public class TryCatchDemo {

    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Chia cho 0, sẽ ném ra ngoại lệ ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

//try-catch: được sử dụng để bao bọc một khối mã có thể gây ra ngoại lệ và xử lý ngoại lệ đó.
//Khi một ngoại lệ xảy ra trong khối try, chương trình sẽ chuyển đến khối catch tương ứng để xử lý ngoại lệ.
//Nếu không sử dụng try-catch để xử lý ngoại lệ, chương trình có thể bị dừng đột ngột khi ngoại lệ xảy ra.

