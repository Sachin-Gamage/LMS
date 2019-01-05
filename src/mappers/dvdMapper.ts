
import { DVD } from '../modals/dvd';

export function dvdMapper(apiMpodel){
    const dvdList:DVD[] = new Array<DVD>();
    apiMpodel.forEach((apiBook) => {
        const dvd:DVD = new DVD();
        dvd.$ISBN = apiBook.isbn;
        dvd.$title = apiBook.title;
        dvd.$pubDate = apiBook.publicationDate;
        dvd.$reader = apiBook.reader;
        dvd.$type = 'dvd';
        dvd.$producer = apiBook.producer;
        dvdList.push(dvd);
    });

    return dvdList;
}