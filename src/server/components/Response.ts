// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { ServerResponse } from 'http';
import { IResponse, IDataResponse, IOpResponse } from '../interfaces/IResponse';
import Logger from '../../logger/Logger';
import { LogType } from '../../logger/enums/LogType';

declare module 'http' {
    interface ServerResponse extends IResponse {}
}

export const createResponse = (res: ServerResponse) => {
    res.out = (message: string, statusCode?: number): IOpResponse => {
        return {
            _write: () => {
                res.end(message);
            },
            _send: () => {
                if (statusCode) {
                    res.statusCode = statusCode;
                }
                res.end(message);
            },
            send: (url: string, outLog = false) => {
                if (statusCode) {
                    res.statusCode = statusCode;
                }

                if (outLog) {
                    res.end(`${url}: ${message} - ${statusCode}`);
                } else {
                    res.end(message);
                }

                Logger.Log(LogType.INFO, `${url}: ${message} - ${statusCode}`);
            },
        };
    };

    res.data = (message: string): IDataResponse => {
        return {
            json: () => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(message));
            },
            html: () => {
                res.setHeader('Content-Type', 'text/html');
                res.end(message);
            },
            custom: (name: string, value: string) => {
                res.setHeader(name, value);
                res.end(message);
            },
        };
    };

    res.json = (message: unknown) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(message));
    };

    res.html = (message: string) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(message);
    };

    return res;
};

export default createResponse;

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
