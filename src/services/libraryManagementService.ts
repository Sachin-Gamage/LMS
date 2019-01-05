/* tslint:disable */

import { DVD } from "../modals/dvd";
import { Book } from "../modals/book";
import { LibraryItemDisplay } from "../modals/libraryItemDisplay";
import { Reader } from "../modals/reader";
import { Report } from "../modals/report";
import { HttpRequestHandler } from "../util/httpRequestHandler";
import { booksMapper, bookMapper } from "../mappers/bookMapper";
import { dvdMapper } from "../mappers/dvdMapper";
import { mapLibraryItems } from "../mappers/libraryItemMapper";

class LibraryManagementService {
  private dvdList: DVD[];
  private bookList: Book[];
  private httpRequestHandler: HttpRequestHandler = new HttpRequestHandler();

  constructor() {
    this.dvdList = new Array<DVD>();
    this.bookList = new Array<Book>();
  }

  public addItem(itemType: string, dvd: DVD, book: Book): Promise<string> {
    let url = "";
    let body = null;
    if (itemType.toLowerCase() === "book") {
      url = "/addBook";
      body = book;
    } else {
      url = "/addDvd";
      body = dvd;
    }

    return new Promise((resolve, reject) => {
      this.httpRequestHandler
        .postItem(url, body)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public getAllItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpRequestHandler.getItem('/getAllItems').then(items => {
        resolve(items.data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public getBook(isbn:string):Promise<Book>{
    return new Promise((resolve,reject) => {
      this.httpRequestHandler.getItem(`/getBook?isbn=${isbn}`).then(res => {
        resolve(bookMapper(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  public deleteItem(itemType: string, ISBN: string): any {
    return new Promise((resolve,reject) => {
      this.httpRequestHandler.deleteItem(`/deleteBook?isbn=${ISBN}`).then(res => {
        resolve(bookMapper(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  public displayItems() {}

  public burrowItem(ISBN: string, itemType: string, reader: Reader) {
    return new Promise((resolve,reject) => {
      this.httpRequestHandler.deleteItem(`/burrowBook?isbn=${ISBN}`).then(res => {
        resolve(bookMapper(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  public returnItem(itemType: string, ISBN: string) {
    return new Promise((resolve,reject) => {
      this.httpRequestHandler.deleteItem(`/returnBook?isbn=${ISBN}`).then(res => {
        resolve(bookMapper(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  public generateReport() {}

  private addDVD(dvd: DVD) {}

  private addBook(book: Book) {}

  private calculateFine(penaltyDays: number) {}
}

export default new LibraryManagementService();
