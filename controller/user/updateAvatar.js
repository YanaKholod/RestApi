const path = require("path");
const fs = require("fs/promises");
const User = require("../../models/user");
const { HttpError, resizeImage } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../public/avatars");

const tempDir = path.join(__dirname, "../../temp");

const avatarExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "tiff"];

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const avatarName = `${_id}_${originalname}`;
  const fileExtension = originalname.substring(
    originalname.lastIndexOf(".") + 1
  );

  if (!avatarExtensions.includes(fileExtension.toLowerCase())) {
    throw new HttpError(
      400,
      `${originalname} includes an invalid file extension! Must be: ${avatarExtensions.join(
        ", or "
      )}`
    );
  }

  const tempImagePath = path.join(tempDir, avatarName);

  const resizedImagePath = path.join(avatarsDir, avatarName);

  try {
    await fs.stat(tempImagePath);
  } catch (error) {
    await fs.copyFile(tempUpload, tempImagePath);
  }
  await resizeImage(tempImagePath, resizedImagePath);
  await User.findByIdAndUpdate(_id, {
    avatarURL: path.join("avatars", avatarName),
  });

  res.json({
    avatarURL: path.join("avatars", avatarName),
  });
};

module.exports = updateAvatar;
