public class OCA14_ex2 {

    public static void main(String[] args) {
        String[] arr = {"A", "B", "C", "D"};
        for (int i = 0; i < arr.length; i++) { //Chạy vòng lặp theo mảng arr
            System.out.println(arr[i] + "");   // Sẽ in ra phần tử tại index i với 1 String
            if (arr[i].equals("C")) {   //Điều kiện nếu tại phần tử arr[i] = "C" thì sẽ bỏ qua lần lặp này
                continue;
            }
            System.out.println("Work Done"); //In ra cộng thêm chuỗi "Work Done" và break thoát vòng lặp
            break;
        }
    }
}
// A. A B C Work Done => Sai vì vòng lặp chỉ chạy 1 lần và gặp break, không vào điều kiện
// B. A B C D Work Done => Sai vì vòng lặp chỉ chạy 1 lần và gặp break, không vào điều kiện
// C. A  Work Done => Đúng vì vòng lặp chỉ chạy 1 lần và gặp break, không vào điều kiện và in ra arr[0] + "Work Done"
// D. Compilation fails => Sai vì bài toán cho ra kết quả C