export class IllegalDataException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'IllegalDataException';
    }
}