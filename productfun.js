const products = require('./product')

// Add new product function
function addNewProduct(name, price) {
    let newProduct = {
        name: name,
        price: price,
    };
    products.push(addNewProduct);
}
addNewProduct("Tea",50);

//Delete Product by name
function deleteProduct(productName){
    for (let i = 0; i < products.length; i++) {
        if(products[i].name === productName){
            products.splice(i,1);
            console.log("Product Deleted", productName);
            return; 
        }
        
    }
    console.log("Product not found for deletion", productName);
}

module.exports = {
    addNewProduct,
    deleteProduct
}