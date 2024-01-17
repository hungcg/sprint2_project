package OCA1;

class Product {
    double price;

    // khởi tạo price với kiểu dữ liệu nguyên thủy
    public static void main(String[] args) {
        Product prt = new Product(); //1 đối tượng prt được tạo ra
        prt.price = 200;//và giá trị của prt là price =200
        double newPrice = 100;//khởi tạo biến kiểu nguyên thủy =100
        // Lớp OCA1.Test được khởi tạo với biến là t
        Test t = new Test();
       //Phương thức updatePrice của lớp OCA1.Test được
        t.updatePrice(prt, newPrice);
        // gọi với đối tượng prt và newPrice làm đối số.
        System.out.println(prt.price + " : " + newPrice);
        //giá trị của prt.price và newPrice được in ra.
    }
}

