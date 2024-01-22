const express = require('express')
const app = express()

const products = require('./product'); //this method is called destructuring


app.get('/',function displayAllProducts(req,res) {
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name, products[i].price);
    }

    //send response to the client if needed
    res.send(products);
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});