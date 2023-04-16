export interface IExpect<T> {
    toEqualValueAndType(expected: T): string;
    toEqualValue(expected: T): string;
    toEqualValueAsArray(expected: T): string;
    toEqualValueAsObject(expected: T): string;
    toEqualType(expected: T): string;
    toEqualFunction(expected: T): string;
}      