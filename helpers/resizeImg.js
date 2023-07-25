const Jimp = require("jimp");

const resizeImg = async (sourcePath, destinationPath) => {
  const img = await Jimp.read(sourcePath);
  img.resize(250, 250);
  await img.writeAsync(destinationPath);
};

module.exports = resizeImg;
