import { LibraryItem } from './libraryItem';

export class Book extends LibraryItem{
    private authors: string[];
    private publisher:string;
    private noOfPages:number;


    /**
     * Getter $authors
     * @return {string[]}
     */
	public get $authors(): string[] {
		return this.authors;
	}

    /**
     * Setter $authors
     * @param {string[]} value
     */
	public set $authors(value: string[]) {
		this.authors = value;
	}

    /**
     * Getter $publisher
     * @return {string}
     */
	public get $publisher(): string {
		return this.publisher;
	}

    /**
     * Setter $publisher
     * @param {string} value
     */
	public set $publisher(value: string) {
		this.publisher = value;
	}

    /**
     * Getter $noOfPages
     * @return {number}
     */
	public get $noOfPages(): number {
		return this.noOfPages;
	}

    /**
     * Setter $noOfPages
     * @param {number} value
     */
	public set $noOfPages(value: number) {
		this.noOfPages = value;
	}


}