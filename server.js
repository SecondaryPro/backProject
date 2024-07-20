import app from "./app.js";
import cloudinary from "cloudinary";
const PORT_NUM = 4000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT || PORT_NUM, () => {
  console.log(`Server listening at port ${process.env.PORT || PORT_NUM}`);
});
