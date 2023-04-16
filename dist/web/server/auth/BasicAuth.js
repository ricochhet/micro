// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import { timeSafeCompare } from '../utils/Compare';
import { Sha256 } from '../crypto/Sha256';
const CREDENTIALS_REGEXP = new RegExp('^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$');
const USER_PASS_REGEXP = new RegExp('^([^:]*):(.*)$');
export default class BasicAuth {
    static create(req, res, middleware, basicAuthHandlerTable = null) {
        if (!req.headers || typeof req.headers !== 'object')
            return;
        const headers = req.headers.authorization;
        const decodeBase64 = (str) => {
            return Buffer.from(str, 'base64').toString();
        };
        const credentials = CREDENTIALS_REGEXP.exec(headers);
        if (!credentials)
            return null;
        const userPass = USER_PASS_REGEXP.exec(decodeBase64(credentials[1]));
        if (!userPass)
            return null;
        if (typeof middleware !== 'function')
            return null;
        if (!userPass || !this.handler(Sha256(userPass[1]), Sha256(userPass[2]), basicAuthHandlerTable)) {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="realm"');
            res.end('Unauthorized');
        }
        else {
            middleware();
        }
    }
    static handler(user, pass, basicAuthHandlerTable) {
        if (basicAuthHandlerTable) {
            for (const i in basicAuthHandlerTable) {
                const compareUser = timeSafeCompare(user, basicAuthHandlerTable[i]['user']);
                const comparePass = timeSafeCompare(pass, basicAuthHandlerTable[i]['pass']);
                if (compareUser && comparePass) {
                    return true;
                }
            }
            return false;
        }
        else {
            return null;
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
