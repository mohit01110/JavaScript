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

module.exports = deleteProduct;