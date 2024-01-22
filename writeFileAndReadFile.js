//Program
//First Write a file and create a promise function
//Then Read a file using async and await using promises

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let data = `
    Hello Mohit.
    You are awesome    
`
//Created a function for writeFile
function writeFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath, data, "utf-8",(err)=>{
            if(err){
                reject(err)
            }
            resolve('File has been written successfully!')
        });
    });
}

// Async function handlePromise
async function handlePromise(){
    try{
    const result = await writeFile('./mohit.txt');
    console.log(result);
    }catch(error){
        console.error(error);
    }
}
handlePromise();


//Asynchronous method to reading File

function readingFile(filepath){
     return new Promise((resolve,reject)=>{
        fs.readFile(filepath, "utf-8",(err,data)=>{
            if(err){
                 reject(err)
             }          
                 resolve(data);
            
         });
     });
 }

 // Async function handlePromise
 async function handleReadingPromise(){
    try{
        const filedata = await readingFile('./mohit.txt');
        console.log(filedata);
    }catch (error){
        console.error(error);
    }
}
handleReadingPromise();

