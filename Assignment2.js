const fs = require('fs');


fs.readdir('C:/Users/pranathp/Documents/NodeJS', (err, files) => {
    console.log('The directory has below files \n', files);
});
