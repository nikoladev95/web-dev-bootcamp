/* Internal Node.js module */

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");

/* Externam Node.js module */
const superheroes = require("superheroes");
const supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log(mySuperheroName + " vs " + mySupervillainName);