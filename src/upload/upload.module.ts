import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [UploadController],
  providers: [UploadService, CloudinaryService],
})
export class UploadModule {}
