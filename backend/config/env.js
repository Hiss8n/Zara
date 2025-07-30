import dotenv from 'dotenv/config';



const ENV={
    PORT:process.env.PORT,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    MONGO_URI:process.env.MONGO_URI,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
    EMAIL_USER:process.env.EMAIL_USER,
    EMAIL_PASSWORD:process.env.EMAIL_PASSWORD,
    NODE_ENV:process.env.NODE_ENV

}

export default ENV;