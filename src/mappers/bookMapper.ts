import { Book } from '../modals/book';
import { LibraryItemDisplay } from '../modals/libraryItemDisplay';

export function booksMapper(apiMpodel){
    const bookList:Book[] = new Array<Book>();
    apiMpodel.forEach((apiBook) => {
        const book:Book = new Book();
        book.$authors = apiBook.authors
        book.$ISBN = apiBook.isbn;
        book.$title = apiBook.title;
        book.$noOfPages = apiBook.totalPages;
        book.$pubDate = apiBook.publicationDate;
        book.$reader = apiBook.currentReader;
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
    book.$reader = apiBook.currentReader;
    book.$type = 'book';
    book.$publisher = apiBook.publisher;
    return book;

}

export function bookListMapper(apiBooks):LibraryItemDisplay[]{
    const libraryItemDisplayList = new Array<LibraryItemDisplay>();

    apiBooks.forEach((book) => {
        const libraryItemDisplay = new LibraryItemDisplay();
        libraryItemDisplay.$ISBN = book.isbn;
        libraryItemDisplay.$itemtype = 'Book';
        libraryItemDisplay.$title = book.title;
        libraryItemDisplay.$reader = book.currentReader;
        libraryItemDisplayList.push(libraryItemDisplay);
    });

    return libraryItemDisplayList;

}