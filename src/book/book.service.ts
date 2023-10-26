import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BookService {
  async search(theme: string) {
    return this.bookModel.find({ theme }).exec();
  }

  async ckeckedBooks(checked: boolean) {
    return this.bookModel.find({ checked }).exec();
  }

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel({
      ...createBookDto,
    });
    return createdBook.save();
  }

  async update(
    id: string,
    updateBookDto: UpdateBookDto,
  ): Promise</*UpdateResult*/ any> {
    return this.bookModel.updateOne({ _id: id }, updateBookDto);
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.bookModel.deleteOne({ _id: id });
  }

  async searchBooks(search: string): Promise<BookDocument[]> {
    console.log(search);
    const books = await this.bookModel.find({
      title: { $regex: `.*${search}.*`, $options: 'i' },
    });
    console.log(books);
    return books;
  }
}
