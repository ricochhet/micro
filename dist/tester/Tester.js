import Logger from '../logger/Logger';
import { LogType } from '../logger/enums/LogType';
import { StatusType } from './enum/StatusType';
import ArrayUtils from '../utils/Array';
class Tester {
    static _passes = 0;
    static _failures = 0;
    static assert(description, toTest) {
        try {
            toTest((actual, suppress, _description) => this.expect(actual, suppress, description));
            return StatusType.UNKNOWN;
        }
        catch (e) {
            Logger.Log(LogType.ERROR, `FAIL: ${description}`);
            return StatusType.FAILURE;
        }
    }
    static report() {
        Logger.Log(LogType.NOTICE, `PASSED: ${this._passes} - FAILED: ${this._failures}`);
    }
    static expect(actual, suppress, description) {
        const success = (expected) => {
            if (suppress)
                return StatusType.SUCCESS;
            this._passes++;
            Logger.Log(LogType.SUCCESS, `PASS (${this._passes}): ${description}`);
            Logger.Log(LogType.DEBUG, `----PASS: ${actual} equals ${expected}`);
            return StatusType.SUCCESS;
        };
        const failure = (expected) => {
            if (suppress)
                return StatusType.FAILURE;
            this._failures++;
            Logger.Log(LogType.ERROR, `FAIL (${this._failures}): ${description}`);
            Logger.Log(LogType.ERROR, `----FAIL: ${actual} does not equal ${expected}`);
            return StatusType.FAILURE;
        };
        return {
            toEqualValueAndType(expected) {
                if (actual === expected) {
                    return success(expected);
                }
                return failure(expected);
            },
            toEqualValue(expected) {
                if (actual == expected) {
                    return success(expected);
                }
                return failure(expected);
            },
            toEqualValueAsArray(expected) {
                if (Array.isArray(actual) && Array.isArray(expected)) {
                    if (ArrayUtils.Equals(actual, expected)) {
                        return success(expected);
                    }
                    return failure(expected);
                }
                return failure(expected);
            },
            toEqualValueAsObject(expected) {
                if (JSON.stringify(actual) === JSON.stringify(expected)) {
                    return success(expected);
                }
                return failure(expected);
            },
            toEqualType(expected) {
                if (typeof actual === typeof expected) {
                    return success(expected);
                }
                return failure(expected);
            },
            toEqualFunction(expected) {
                if (typeof actual !== 'function') {
                    return failure(expected);
                }
                if (actual() === expected) {
                    return success(expected);
                }
                return failure(expected);
            },
        };
    }
}
export default Tester;
