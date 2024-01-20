public class OCA6_2 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer(5);
        //khởi tạo StringBuffer có sức chứa là 5
        String s ="";
        //khởi tạo chuỗi rỗng s
        if (sb.equals(s)){
            System.out.println("Match 1");
            //phương thức equal được hiểu so sánh ==
            // là kiểu so sánh địa chỉ ô nhớ nên điều kiện không thỏa mãn
        } else if (sb.toString().equals(s.toString())) {
            System.out.println("Match 2");
            //phương thức toString() chuyển obj sb thành 1 chuỗi
            //nên trường hợp này so sánh giá trị nên thỏa mãn điều kiện
        }else{
            System.out.println("No Match");
            //điều kiện này không vào vì đã thỏa mãn if trên
        }
    }
}
