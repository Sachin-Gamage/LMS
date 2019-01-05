export class LibraryItemDisplay{
    private ISBN: string;
    private title:string;
    private itemtype:string;


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
     * Getter $itemtype
     * @return {string}
     */
	public get $itemtype(): string {
		return this.itemtype;
	}

    /**
     * Setter $itemtype
     * @param {string} value
     */
	public set $itemtype(value: string) {
		this.itemtype = value;
	}

}