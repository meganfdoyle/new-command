//file system module
const fs = require('fs');

//fs.readdir(path[,options],callback)
//process doesn't require a require statement
fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    };

    console.log(filenames);
});