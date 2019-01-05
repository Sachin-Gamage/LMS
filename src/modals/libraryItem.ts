import { Reader } from './reader';

export abstract class LibraryItem {
    private ISBN:string;
    private title:string;
    private sector:string;
    private pubDate:string;
    private burrowDateAndTime:string;
    private reader:Reader;
    private type: string;
    
    
    
    public get $type(): string {
        return this.type;
    }
    public set $type(value: string) {
        this.type = value;
    }


    /**
     * Getter $ISBN
     * @return {string}
     */
	public get $ISBN(): string {
		return this.ISBN;
	}

    /**
     * Setter $ISBN
     * @param {string} value
     */
	public set $ISBN(value: string) {
		this.ISBN = value;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Getter $sector
     * @return {string}
     */
	public get $sector(): string {
		return this.sector;
	}

    /**
     * Setter $sector
     * @param {string} value
     */
	public set $sector(value: string) {
		this.sector = value;
	}

    /**
     * Getter $pubDate
     * @return {Date}
     */
	public get $pubDate(): string {
		return this.pubDate;
	}

    /**
     * Setter $pubDate
     * @param {Date} value
     */
	public set $pubDate(value: string) {
		this.pubDate = value;
	}

    /**
     * Getter $burrowDateAndTime
     * @return {Date}
     */
	public get $burrowDateAndTime(): string {
		return this.burrowDateAndTime;
	}

    /**
     * Setter $burrowDateAndTime
     * @param {Date} value
     */
	public set $burrowDateAndTime(value: string) {
		this.burrowDateAndTime = value;
	}

    /**
     * Getter $reader
     * @return {Reader}
     */
	public get $reader(): Reader {
		return this.reader;
	}

    /**
     * Setter $reader
     * @param {Reader} value
     */
	public set $reader(value: Reader) {
		this.reader = value;
	}

   
}