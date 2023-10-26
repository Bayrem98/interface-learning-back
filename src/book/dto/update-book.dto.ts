import { IsMongoId, IsOptional } from 'class-validator';

export default class UpdateBookDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  title?: string;
  @IsOptional()
  author?: string;
  @IsOptional()
  description?: string;
  @IsOptional()
  coverPath?: string;
  @IsOptional()
  pdfPath?: string;
  @IsOptional()
  language?: string;
  @IsOptional()
  theme: string;
  @IsOptional()
  audio: string;
  @IsOptional()
  checked: boolean;
}
