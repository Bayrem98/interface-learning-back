import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import * as dotenv from 'dotenv';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.gjbdf3j.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    UserModule,
    AuthModule,
    BookModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
