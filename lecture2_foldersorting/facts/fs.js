//fs=>file system
const fs =require("fs");
//console.log(fs);
//utf-8 => plan text formate
//if utf-8 is not written then we get buffer file or we can use  + " "(data in string form)
let f1kaData = fs.readFileSync("./f1.txt","utf-8");
console.log(f1kaData);
fs.writeFileSync("./index.txt","hello world!..");