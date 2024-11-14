#!/usr/bin/env node
const fs = require('fs');

//.mjs? import instead of require

fs. readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    };

    console.log(filenames);
})