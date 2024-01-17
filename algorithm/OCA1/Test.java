package OCA1;

public class Test {
    public void updatePrice(Product product, double price) {
        price = price * 2;
        product.price = product.price + price;
    }
}
//Hàm này truyền vào 2 tham số với product là kiểu đối tượng
//và price là kiểu nguyên thủy
//
// A. 200.0 : 100.0
// B. 400.0 : 200.0
// C. 400.0 : 100.0 => Chính xác vì price là kiểu nguyên thủy khi truyền vào hàm updatePrice thì
//price*2 = 100*2 =200 nhưng ra khỏi hàm thì nó vẫn không đổi và giữ giá trị 100 lúc khởi tạo
//còn product là 1 đối tượng khi truyền vào hàm updatePrice
//thì product.price= product.price + price = 200 +200 =400, khi ra khỏi hàm thì sẽ bị thay đổi
// sau khi tính toán
// D. Compilation Fail