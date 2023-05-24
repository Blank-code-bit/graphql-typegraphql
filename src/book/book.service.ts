import { Injectable } from '@nestjs/common';
import books from 'src/data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book[]>;
  constructor() {
    this.books = books;
  }

  async findMany() {
    return this.books;
  }

  async findById(id) {
    const books = this.books.find((books) => books.id === id);
    if (books) {
      return books;
    }

    return null;
  }

  async findByAuthorId(authorId) {
    return this.books.filter((book) => book.author === authorId);
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
