let products = [
    {
        name: "pepsi",
        price: 25,
    },
    {
        name: "Wheat",
        price: 250,
    },
    {
        name: "Rice",
        price: 60,
    },
];


// Add new product function
function addNewProduct(name, price) {
    let newProduct = {
        name: name,
        price: price,
    };
    products.push(addNewProduct);
}
addNewProduct("Tea",50);



module.exports=addNewProduct;