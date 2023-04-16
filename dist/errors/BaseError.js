export default class BaseError extends Error {
    Name;
    Message;
    Stack;
    Solution;
    ErrorReferenceString;
    constructor(name, message, solution = null) {
        super(message);
        this.Name = name;
        this.Message = message;
        this.Solution = solution || '';
        Object.setPrototypeOf(this, BaseError.prototype);
    }
    static fromThrownValue(error, defaultName = 'An unhandled error has occurred') {
        if (error instanceof BaseError) {
            return error;
        }
        else if (error instanceof Error) {
            return new BaseError(defaultName, error.message);
        }
        else {
            return new BaseError(defaultName, `${error}`);
        }
    }
}
