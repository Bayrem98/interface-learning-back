import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME || 'dbnljryjc',
      api_key: process.env.CLOUDINARY_API_KEY || '552237126716848',
      api_secret:
        process.env.CLOUDINARY_API_SECRET || 't1yOFzk9qiMDLTbO416jzHc5X00',
      secure: true,
    });
  },
};
