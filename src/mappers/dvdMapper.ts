
import { DVD } from '../modals/dvd';

export function dvdsMapper(apiMpodel){
    const dvdList:DVD[] = new Array<DVD>();
    apiMpodel.forEach((apiDVD) => {
        const dvd:DVD = new DVD();
        dvd.$ISBN = apiDVD.isbn;
        dvd.$title = apiDVD.title;
        dvd.$pubDate = apiDVD.publicationDate;
        dvd.$reader = apiDVD.reader;
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
      dvd.$reader = apiDvd.reader;
      dvd.$type = "dvd";
      dvd.$producer = apiDvd.producer;
      return dvd;
}