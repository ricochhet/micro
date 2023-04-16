// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { LogType } from './LogType';
import { FgRed, FgWhite, FgYellow, FgGray, FgGreen, FgBlue } from '../utils/ConsoleColors';

export abstract class LogTypeHelper {
    public static Color(type: string): string {
        switch (type) {
            case LogType.DEBUG:
                return FgGray;
            case LogType.INFO:
                return FgWhite;
            case LogType.WARN:
                return FgYellow;
            case LogType.NATIVE:
                return FgGray;
            case LogType.ERROR:
                return FgRed;
            case LogType.SUCCESS:
                return FgGreen;
            case LogType.BENCHMARK:
                return FgGray;
            case LogType.NOTICE:
                return FgBlue;
            default:
                throw new Error();
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
