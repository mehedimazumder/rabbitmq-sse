module.exports = (folderPath) => {
  const fs = require("fs");
  const path = require("path");

  const isFile = (fileName) => {
    return fs.lstatSync(fileName).isFile();
  };

  return fs.readdirSync(folderPath)
    .map((fileName) => {
      return path.join(folderPath, fileName);
    })
    .filter(isFile);
};
