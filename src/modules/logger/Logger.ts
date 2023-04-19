// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { LogTypeHelper } from './enums/LogTypeHelper';
import FsProvider from '../../core/providers/FsProvider';

export default class Logger {
    private static logList: string[] = [];
    private static outLog: boolean = false;
    private static outLogPath: string = '';

    public static Options(_out: boolean, _path: string) {
        this.outLog = _out;
        this.outLogPath = _path;
    }

    public static async Log(type: string, error: string) {
        Logger.logList.push(`${new Date().toLocaleDateString()} [${type}]: ${error}`);
        Logger.Stdout(type, Logger.logList.slice(-1)[0]);

        this.Write();
    }

    private static async Write() {
        if (this.outLog && this.outLogPath && this.outLogPath.length !== 0) {
            FsProvider.WriteFileSync(this.outLogPath, Logger.logList.join('\n'));
        }
    }

    private static Stdout(type: string, message: string) {
        process.stdout.write(`${LogTypeHelper.Color(type)}${message}\x1b[0m\n`);
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
