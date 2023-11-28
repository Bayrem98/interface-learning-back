import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Controller()
export class AppController {
  constructor(private cloudinary: CloudinaryService) {}

  @Post('localcover')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './covers',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async localcover(@UploadedFile() file: Express.Multer.File) {
    return {
      statusCode: 200,
      data: file.path,
    };
  }

  @Post('localpdf')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './pdfs',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async localpdf(@UploadedFile() file: Express.Multer.File) {
    return {
      statusCode: 200,
      data: file.path,
    };
  }

  @Post('localaudio')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './audios',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async localaudio(@UploadedFile() file: Express.Multer.File) {
    return {
      statusCode: 200,
      data: file.path,
    };
  }

  @Post('onlinecover')
  @UseInterceptors(FileInterceptor('file'))
  async onlinecover(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return {
          statusCode: 200,
          data: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }

  @Post('onlinepdf')
  @UseInterceptors(FileInterceptor('file'))
  async onlinepdf(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return {
          statusCode: 200,
          data: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }

  @Post('onlineaudio')
  @UseInterceptors(FileInterceptor('file'))
  async onlineaudio(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return {
          statusCode: 200,
          data: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }
}
