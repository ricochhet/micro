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
// MIT License
// This file is a part of github.com/ricochhet/micro
// Copyright (c) 2023 Jon
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
