import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.REACT_APP_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
  secure: true,
}) 
export default cloudinary;