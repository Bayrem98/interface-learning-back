import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('cover')
  async uploadCover(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.cloudinaryService.uploadFile(file);
      return { statusCode: 200, message: 'Upload successful', data: result };
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  @Post('pdf')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './pdfs',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadPDF(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  @Post('audio')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './audios',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadAudio(@UploadedFile() file: Express.Multer.File) {
    return file;
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
