public class OCA6 {
    public static void main(String[] args) {
        String ta ="A ";
        // khởi tạo biến ta = A
        ta = ta.concat("B ");
        //ta nối chuỗi với "B" và gán được gán lại giá trị mới => ta ="A B"
        String tb = "C ";
        //khởi tạo biến tb = C
        ta= ta.concat(tb);
        //ta nối chuỗi với tb và gán được gán lại giá trị mới => ta ="A B C"
        ta.replace("C ", "D");
        //phương thức replace thay thế kí tự C trong ta = D
        //nhưng ta không được gán lại giá trị mới nên giá trị ta vẫn =" A B C"
        ta = ta.concat(tb);
        // ta nối chuỗi với tb và gán được gán lại giá trị mới => ta ="A B C C"

        System.out.println(ta);
    }
}
