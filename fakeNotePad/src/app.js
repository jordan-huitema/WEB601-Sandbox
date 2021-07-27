const fs = require('fs');
const test = require('./test.js');


fs.writeFileSync('./myNotes.txt', 'Hello World!')

fs.appendFileSync('./myNotes.txt', '\nHello World!')

test()
