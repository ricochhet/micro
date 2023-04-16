// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
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
