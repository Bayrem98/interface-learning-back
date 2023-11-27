import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('cover')
  async uploadCover(@Res() res, @Body('file') file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadFile(file);
    // Vous pouvez renvoyer les détails de l'upload réussi
    return res.json({ message: 'Upload réussi', data: result });
  }

  @Post('pdf')
  async uploadPDF(@Res() res, @Body('file') file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadFile(file);
    // Vous pouvez renvoyer les détails de l'upload réussi
    return res.json({ message: 'Upload réussi', data: result });
  }

  @Post('audio')
  async uploadAudio(@Res() res, @Body('file') file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadFile(file);
    // Vous pouvez renvoyer les détails de l'upload réussi
    return res.json({ message: 'Upload réussi', data: result });
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
