import { Book } from '../modals/book';

export function booksMapper(apiMpodel){
    const bookList:Book[] = new Array<Book>();
    apiMpodel.forEach((apiBook) => {
        const book:Book = new Book();
        book.$authors = apiBook.authors
        book.$ISBN = apiBook.isbn;
        book.$title = apiBook.title;
        book.$noOfPages = apiBook.totalPages;
        book.$pubDate = apiBook.publicationDate;
        book.$reader = apiBook.reader;
        book.$type = 'book';
        book.$publisher = apiBook.publisher;
        bookList.push(book);
    });

    return bookList;
}

export function bookMapper(apiBook):Book{
    const book:Book = new Book();
    book.$authors = apiBook.authors
    book.$ISBN = apiBook.isbn;
    book.$title = apiBook.title;
    book.$noOfPages = apiBook.totalPages;
    book.$pubDate = apiBook.publicationDate;
    book.$reader = apiBook.reader;
    book.$type = 'book';
    book.$publisher = apiBook.publisher;
    return book;

}