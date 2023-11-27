import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Controller('upload')
export class AppController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('cover')
  @UseInterceptors(FileInterceptor('file'))
  uploadCover(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }
}
