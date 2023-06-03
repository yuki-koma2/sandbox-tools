export class DataCreateException extends Error {
    constructor(message:string) {
        super(message);
        this.name = 'DataCreateException';
    }
}