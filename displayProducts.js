// Display all the products
function displayAllProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name, products[i].price);
    }
}

//Display all products

module.exports = displayAllProducts;
