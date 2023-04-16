export default class BaseError extends Error {
    public Name: string;
    public Message: string;
    public Stack?: string | undefined;
    public Solution: string;
    public ErrorReferenceString: string | undefined;

    public constructor(name: string, message: string, solution: string | null = null) {
        super(message);
        this.Name = name;
        this.Message = message;
        this.Solution = solution || '';
        Object.setPrototypeOf(this, BaseError.prototype);
    }

    public static fromThrownValue(error: BaseError | Error | unknown, defaultName: string = 'An unhandled error has occurred'): BaseError {
        if (error instanceof BaseError) {
            return error;
        } else if (error instanceof Error) {
            return new BaseError(defaultName, error.message);
        } else {
            return new BaseError(defaultName, `${error}`);
        }
    }
}
