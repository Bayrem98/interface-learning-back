import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  author: string;
  @Prop({ required: true, type: String })
  description: string;
  @Prop({ required: true, type: String })
  coverPath: string;
  @Prop({ required: true, type: String })
  pdfPath: string;
  @Prop({ required: true, type: String })
  language: string;
  @Prop({ required: true, type: String })
  theme: string;
  @Prop({ required: true, type: String })
  audio: string;
  @Prop({ type: Boolean })
  checked: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
