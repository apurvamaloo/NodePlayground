var fs=require('fs');
fs.writeFileSync("sampleFile","Hello I am writing in this file");
console.log("reading file",fs.readFileSync("sampleFile").toString());
