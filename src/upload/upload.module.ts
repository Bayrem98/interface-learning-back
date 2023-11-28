import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { CloudinaryProvider } from 'src/cloudinary/cloudinary.provider';

@Module({
  imports: [CloudinaryModule],
  controllers: [UploadController],
  providers: [UploadService, CloudinaryProvider],
})
export class UploadModule {}
