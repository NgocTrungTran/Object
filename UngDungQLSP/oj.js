function Product(nameProduct, priceProduct, quantityProduct, colorProduct, imageProduct) {
    this.nameProduct = nameProduct;
    this.priceProduct = priceProduct;
    this.quantityProduct = quantityProduct;
    this.colorProduct = colorProduct;
    this.imageProduct = imageProduct;
}

let product_1 = new Product("VSmart live 4", 4000000, 52, ["Blue", "White", "Black"], "<link href='img/VSmart.jpg'");
let product_2 = new Product("Iphone 8", 10000000, 35, ["Yellow", "White", "Black"], "<link href='img/Iphone.jpg'");
let product_3 = new Product("Samsung A20", 9000000, 62, ["Green", "White", "Black"], "<link href='img/Samsung.jpg'");

let products = [product_1, product_2, product_3];

function renderProduct() {
    let tableProducts = document.querySelector('.table>tbody');
    let htmls = products.map(function (product, index) {
        return `
            <tr>
                <td>${product.nameProduct}</td>
                <td>${product.priceProduct}</td>
                <td>${product.quantityProduct}</td>
                <td>${product.colorProduct}</td>
                <td>${product.imageProduct}</td>
                <td><button class="btn" onclick="editProduct(${index})">Edit</button></td>
                <td><button class="btn" onclick="deleteProduct(${index})">Delete</button></td>
            </tr>
            `
    })
    tableProducts.innerHTML = htmls.join("");
}
renderProduct();