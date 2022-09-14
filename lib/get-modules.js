const path = require("path");
const fs = require("fs");

const getModules = (dirpath, dirname, exclude = []) => {
  const files = fs.readdirSync(path.join(dirpath));

  const modules = files.flatMap((file) => {
    const ext = path.extname(file);
    const filename = path.basename(file, ext);
    if (exclude.includes(filename)) {
      return [];
    }
    const module = require(`../${dirname}/${filename}`);
    return [{ [filename]: module }];
  });

  return modules.reduce((acc, cur) => Object.assign({}, acc, cur));
};

module.exports = getModules;
