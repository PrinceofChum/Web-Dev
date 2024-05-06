const { error } = require('node:console');
const fs = require('node:fs');

fs.writeFile("message.txt","Vanakkam NodeJS!",(err)=>{
    if (err) throw err;
    console.log("Success!");
});

fs.readFile("message.txt",'utf8',(err,data)=>{
    if (err) throw (err);
    console.log(data);
});