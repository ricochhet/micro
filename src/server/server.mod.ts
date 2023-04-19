// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { parseUrl } from './parsers/Url';
import { parseQuery } from './parsers/Query';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import { readBody } from './components/Body';
import { createResponse } from './components/Response';
import { processMiddleware } from './components/Middleware';
import { IMessage } from './interfaces/IMessage';
import { Callback, Middleware } from './types/MiddlewareTypes';
import Logger from '../logger/Logger';
import { LogType } from '../logger/enums/LogType';

declare module 'http' {
    interface IncomingMessage extends IMessage {}
}

export default function service() {
    const routeTable: any = {};

    const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
        const routes: string[] = Object.keys(routeTable);
        let match: boolean = false;

        for (let i = 0; i < routes.length; i++) {
            const route: string = routes[i];
            const parsedRoute: string = parseUrl(route);

            if (new RegExp(parsedRoute).test(req.url ?? '') && routeTable[route][req.method?.toLowerCase() ?? '']) {
                let cb: Callback = routeTable[route][req.method?.toLowerCase() ?? ''];
                let middleware: Middleware = routeTable[route][`${req.method?.toLowerCase()}-middleware`];
                const m: RegExpMatchArray | null | undefined = req.url?.match(new RegExp(parsedRoute));

                req.params = m?.groups ?? {};
                req.query = parseQuery(req.url ?? '');
                req.body = await readBody(req);

                const result = await processMiddleware(middleware, req, createResponse(res));

                if (result) {
                    cb(req, res);
                }

                match = true;
                break;
            }
        }

        if (!match) {
            res.statusCode = 404;
            res.end('Not Found');
        }
    });

    function registerPath(path: string, cb: Function, method: string, middleware?: Function | null) {
        if (!routeTable[path]) {
            routeTable[path] = {};
        }

        routeTable[path] = {
            ...routeTable[path],
            [method]: cb,
            [method + '-middleware']: middleware,
        };
    }

    return {
        get: (path: string, ...rest: [Function] | [Middleware, Function]) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'get');
            } else {
                registerPath(path, rest[1], 'get', rest[0]);
            }
        },
        post: (path: string, ...rest: [Function] | [Middleware, Function]) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'post');
            } else {
                registerPath(path, rest[1], 'post', rest[0]);
            }
        },
        put: (path: string, ...rest: [Function] | [Middleware, Function]) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'put');
            } else {
                registerPath(path, rest[1], 'put', rest[0]);
            }
        },
        delete: (path: string, ...rest: [Function] | [Middleware, Function]) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'delete');
            } else {
                registerPath(path, rest[1], 'delete', rest[0]);
            }
        },
        listen: (port: number, cb?: () => void | null) => {
            server.listen(port, cb);

            return {
                message: (message: string) => {
                    Logger.Log(LogType.INFO, message);
                },
            };
        },
    };
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
