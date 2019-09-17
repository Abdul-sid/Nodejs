const a = require('path');


// base filename
console.log(a.basename(__filename));

// directory name
console.log(a.dirname(__filename));

// file extension
console.log(a.extname(__filename));

// Create path object
console.log(a.parse(__filename));

// Create path object with base
console.log(a.parse(__filename).base);