import Logger from "../logger/Logger"
import { LogType } from "../logger/enums/LogType";
import { IExpect } from "./interfaces/IExpect"
import { StatusType } from "./enum/StatusType"
import ArrayUtils from "../utils/Array";

export default class Tester {
    public static assert<T>(description: string, toTest: (expect: (actual: T, suppress?: boolean, _description?: string) => IExpect<T>) => void): string {
        try {
            toTest((actual, suppress, _description) => this.expect(actual, suppress, description))
            return StatusType.UNKNOWN;
        } catch (e) {
            Logger.Log(LogType.ERROR, `FAIL: ${description}`)
            return StatusType.FAILURE;
        }
    }
    public static expect<T>(actual: T, suppress?: boolean, description?: string): IExpect<T> {
        const success = (expected: T): string => {
            if (suppress) return StatusType.SUCCESS;
            Logger.Log(LogType.SUCCESS, `PASS: ${description}`)
            Logger.Log(LogType.DEBUG, `PASS: ${actual} equals ${expected}`)
            return StatusType.SUCCESS
        }

        const failure = (expected: T): string => {
            if (suppress) return StatusType.FAILURE;
            Logger.Log(LogType.ERROR, `FAIL: ${description}`)
            Logger.Log(LogType.ERROR, `FAIL: ${actual} does not equal ${expected}`)
            return StatusType.FAILURE;
        }

        return {
            toEqualValueAndType(expected: T): string {
                if (actual === expected) {
                    return success(expected)
                }

                return failure(expected)
            },
            toEqualValue(expected: T): string {
                if (actual == expected) {
                    return success(expected)
                }
                
                return failure(expected)
            },
            toEqualValueAsArray(expected: T): string {
                if (Array.isArray(actual) && Array.isArray(expected)) {
                    if (ArrayUtils.Equals(actual, expected)) {
                        return success(expected)
                    }

                    return failure(expected)
                }

                return failure(expected)
            },
            toEqualType(expected: T): string {
                if (typeof actual === typeof expected) {
                    return success(expected)
                }

                return failure(expected)
            },
            toThrow(expected: T): string {
                try {
                    (actual as any)();
                    return StatusType.UNKNOWN;
                } catch (e) {
                    const err: Error = <Error>e;
                    if (err.message === expected) {
                        return success(expected)
                    }
                    
                    return failure(expected)
                }
            }
        }
    }
}