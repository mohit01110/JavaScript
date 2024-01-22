

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

//How to know a file
// fs.stat('example.txt',(err,Stats)=>{
//     if(err){
//         console.log(err);
//     }
//     if(Stats.isFile()){
//         console.log("this is file");
//     }

// })

// //How to know a file
// fs.stat('testfolder',(err,Stats)=>{
//     if(err){
//         console.log(err);
//     }
//     if(Stats.isDirectory()){
//         console.log("this is folder");
//     }
// });

//Second Way
function isFileorFolder(filepath) {
    fs.stat(filepath, (err, stats) => {
        if (err) {
            console.log(err);
        } else {
            if (stats.isFile()) {
                console.log(`${filepath} is a file`);
            } else if (stats.isDirectory()) {
                console.log(`${filepath} is a folder`);
            } else {
                console.log(`${filepath} is neither a file nor a folder`);
            }
        }
    });
}

// Usage
isFileorFolder("./example.txt");
isFileorFolder("testfolder");
