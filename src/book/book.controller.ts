import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}
  @Get()
  findAll(@Query('theme') theme: string) {
    if (!theme) return this.BookService.findAll();
    return this.BookService.search(theme);
  }

  @Get('search/:id')
  searchBook(@Param('id') search: string): Promise<BookDocument[]> {
    return this.BookService.searchBooks(search);
  }

  @Get('checked/:id')
  ckeckedBook(@Param('id') checked: boolean): Promise<BookDocument[]> {
    return this.BookService.ckeckedBooks(checked);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BookService.findOne(id);
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.BookService.create(createBookDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.BookService.update(id, updateBookDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.BookService.delete(id);
  }
}
