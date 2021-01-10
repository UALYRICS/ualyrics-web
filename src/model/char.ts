export class Char {
    private _value: number;

    constructor(char: String){
        this._value = char.charCodeAt(0);
    }

    get getValue():String {
        return String.fromCharCode(this._value);
    }
}