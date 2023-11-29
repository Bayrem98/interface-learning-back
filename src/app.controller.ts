import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Controller()
export class AppController {
  constructor(private cloudinary: CloudinaryService) {}

  @Post('cover')
  @UseInterceptors(FileInterceptor('file'))
  async onlinecover(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return {
          statusCode: 200,
          filename: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file'))
  async onlinepdf(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadPdf(file)
      .then((data) => {
        return {
          statusCode: 200,
          filename: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }

  @Post('audio')
  @UseInterceptors(FileInterceptor('file'))
  async onlineaudio(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return {
          statusCode: 200,
          filename: data.secure_url,
        };
      })
      .catch((err) => {
        return {
          statusCode: 400,
          message: err.message,
        };
      });
  }

  @Get('cover/:fileId')
  async serveCover(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'covers' });
  }

  @Get('pdf/:fileId')
  async servePDF(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'pdfs' });
  }

  @Get('audio/:fileId')
  async serveAudio(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'audios' });
  }
}
