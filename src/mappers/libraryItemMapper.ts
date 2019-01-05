import { Book } from '../modals/book';
import { DVD } from '../modals/dvd';
import { LibraryItem } from '../modals/libraryItem';

export function mapLibraryItems(bookList:Book[], dvdList:DVD[]):LibraryItem[]{
    const libraryItems:LibraryItem[] = new Array<LibraryItem>();

    bookList && bookList.forEach((book)=>{
        libraryItems.push(book);
    });

    dvdList && dvdList.forEach((dvd) => {
        libraryItems.push(dvd);
    });

    return libraryItems;
}