const { isUtf8 } = require("buffer");
const fs = require("fs");

// 1.. creating file 
// fs.writeFile("TextFile.txt","Hello from nodejs file", (err) => {
//     if(err) throw err;
//     console.log("file has been saved!");
    
// })

//2. reading file
fs.readFile("TextFile.txt", "utf-8", (err,data) => {
    if(err) throw err;
    console.log(data);
})
