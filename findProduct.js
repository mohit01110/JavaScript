// Find Product by name
function findProduct(productName) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            return products[i];
        }
    }
    return null;
}

let foundProduct = findProduct("Rice");
if (foundProduct) {
    console.log("Product found: ", foundProduct.name, foundProduct.price);
} else {
    console.log("Product not found");
}

module.exports = findProduct;