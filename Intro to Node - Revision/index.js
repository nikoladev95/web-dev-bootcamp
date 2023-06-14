// const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS! Again!", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.readFile("message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// var generateName = require("sillyname");

// import generateStupidName from "sillyname";
// var sillyName = generateStupidName();

// console.log(`My name is ${sillyName}`);

import superhero from "superheroes";

console.log(`My name is ${superhero.random()}!`);