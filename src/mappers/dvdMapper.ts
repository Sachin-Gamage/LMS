
import { DVD } from '../modals/dvd';
import { LibraryItemDisplay } from '../modals/libraryItemDisplay';

export function dvdsMapper(apiMpodel){
    const dvdList:DVD[] = new Array<DVD>();
    apiMpodel.forEach((apiDVD) => {
        const dvd:DVD = new DVD();
        dvd.$ISBN = apiDVD.isbn;
        dvd.$title = apiDVD.title;
        dvd.$pubDate = apiDVD.publicationDate;
        dvd.$reader = apiDVD.currentReader;
        dvd.$type = 'dvd';
        dvd.$producer = apiDVD.producer;
        dvdList.push(dvd);
    });
    return dvdList;
}

export function dvdMapper(apiDvd){
      const dvd: DVD = new DVD();
      dvd.$ISBN = apiDvd.isbn;
      dvd.$title = apiDvd.title;
      dvd.$pubDate = apiDvd.publicationDate;
      dvd.$reader = apiDvd.currentReader;
      dvd.$type = "dvd";
      dvd.$producer = apiDvd.producer;
      return dvd;
}

export function dvdListMapper(apiDvds):LibraryItemDisplay[]{
    const libraryItemDisplayList = new Array<LibraryItemDisplay>();

    apiDvds.forEach((dvd) => {
        const libraryItemDisplay = new LibraryItemDisplay();
        libraryItemDisplay.$ISBN = dvd.isbn;
        libraryItemDisplay.$itemtype = 'DVD';
        libraryItemDisplay.$title = dvd.title;
        libraryItemDisplay.$reader = dvd.currentReader;
        libraryItemDisplayList.push(libraryItemDisplay);
    });

    return libraryItemDisplayList;

}