import axios from "axios";


export const findAll = async (currentPage,productName,sizeName,categoryName,minPrice,maxPrice) => {
    try {
        console.log(currentPage)
        let res = await axios.get(
            `http://localhost:8080/api/product?page=${currentPage}&name=${productName}&sizeName=${sizeName}&categoryName=${categoryName}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        return res
    } catch (e) {
        console.log(e)
    }

}

export const getProductDetails = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/product/details/${id}`);
        return res;
    } catch (e) {
        alert("Hiển thị loại lỗi!");
    }
}

export const getAllCategory = async () => {
    try {
        let res = await axios.get(`http://localhost:8080/api/product/category`)
        return res
    } catch (e) {
        console.log(e)
    }

}
export const getAllSize = async (currentPage,sizeName,categoryName,productName) => {
    try {
        let res = await axios.get(`http://localhost:8080/api/product/size`)
        return res
    } catch (e) {
        console.log(e)
    }

}