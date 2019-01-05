

export class Reader{

    private id: number;
    private name: string;
    private mobileNumber: string;
    private email: string;

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Getter $mobileNumber
     * @return {string}
     */
	public get $mobileNumber(): string {
		return this.mobileNumber;
	}

    /**
     * Setter $mobileNumber
     * @param {string} value
     */
	public set $mobileNumber(value: string) {
		this.mobileNumber = value;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}
   
}