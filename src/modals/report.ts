export class Report{
    private ISBN:string;
    private itemType:string;
    private title:string;
    private fine:number;


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
     * Getter $itemType
     * @return {string}
     */
	public get $itemType(): string {
		return this.itemType;
	}

    /**
     * Setter $itemType
     * @param {string} value
     */
	public set $itemType(value: string) {
		this.itemType = value;
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
     * Getter $fine
     * @return {number}
     */
	public get $fine(): number {
		return this.fine;
	}

    /**
     * Setter $fine
     * @param {number} value
     */
	public set $fine(value: number) {
		this.fine = value;
	}

}