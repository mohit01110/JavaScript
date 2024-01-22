const fs = require('fs');

let data = `
    This is HeroVired.
    Welcome to the Class    
`;

// Append content to an existing file (hero3.txt)
// fs.appendFile("hero3.txt", data, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Content appended successfully');
//     }
// });

//Synchronous version of append file
fs.appendFileSync('hero3.ext',data)
