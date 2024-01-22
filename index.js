//require() in-built node.js
const {addNewProduct,deleteProduct} = require('./productfun'); //this method is called destructuring
addNewProduct();
console.log(addNewProduct);
//second way
// const obj = require('./productfun');
// obj.addNewProduct(); 



// V8 Engine :-> js (except DOM) 
// Event Loop
// Modules : module.exports are require
// Inbuilt: fs,path,child process,http
//fs: filesystem :--> files and folders
//path : path of files and folders
//cp: to be able to use behind scenes the use application;
//http : network and req, response.
//worker thread : CPU intensives tasks can be worked.
// Global : nodejs (Global and this)
// Event Queue : multiple requests coming from client;
// Lubev library - > I/O asychronous non blocking
// Event Emitter : in built classes for creating custom event;

