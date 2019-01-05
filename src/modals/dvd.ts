import { LibraryItem } from './libraryItem';

export class DVD extends LibraryItem{
    private languagesAvailable: string[];
    private subsAvailablae: string[];
    private producer: string;
    private actors: string[];



    /**
     * Getter $languagesAvailable
     * @return {string[]}
     */
	public get $languagesAvailable(): string[] {
		return this.languagesAvailable;
	}

    /**
     * Setter $languagesAvailable
     * @param {string[]} value
     */
	public set $languagesAvailable(value: string[]) {
		this.languagesAvailable = value;
	}

    /**
     * Getter $subsAvailablae
     * @return {string[]}
     */
	public get $subsAvailablae(): string[] {
		return this.subsAvailablae;
	}

    /**
     * Setter $subsAvailablae
     * @param {string[]} value
     */
	public set $subsAvailablae(value: string[]) {
		this.subsAvailablae = value;
	}

    /**
     * Getter $producer
     * @return {string}
     */
	public get $producer(): string {
		return this.producer;
	}

    /**
     * Setter $producer
     * @param {string} value
     */
	public set $producer(value: string) {
		this.producer = value;
	}

    /**
     * Getter $actors
     * @return {string[]}
     */
	public get $actors(): string[] {
		return this.actors;
	}

    /**
     * Setter $actors
     * @param {string[]} value
     */
	public set $actors(value: string[]) {
		this.actors = value;
	}
   
}