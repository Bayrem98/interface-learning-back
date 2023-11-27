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

@Controller('upload')
export class AppController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('cover')
  @UseInterceptors(FileInterceptor('file'))
  uploadCover(@UploadedFile() file: Express.Multer.File) {
    return this.cloudinaryService.uploadFile(file);
  }

  @Get('cover/:fileId')
  async serveCover(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'covers' });
  }
}
