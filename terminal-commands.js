const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFileSync('hello-world.txt','"I will pretend I am not content in this file."','utf8');
};

module.exports.mkdir = () => {
  let path = './fake-file';

  if(!fs.existsSync(path)){
    fs.mkdirSync(path);
  }
};