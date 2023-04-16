// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import { module_security_warning } from '../../tools/module-security-warning';
module_security_warning('server');
import { parseUrl } from './parsers/Url';
import { parseQuery } from './parsers/Query';
import { createServer } from 'http';
import { readBody } from './components/Body';
import { createResponse } from './components/Response';
import { processMiddleware } from './components/Middleware';
import Logger from '../../logger/Logger';
import { LogType } from '../../logger/enums/LogType';
export default function service() {
    const routeTable = {};
    const server = createServer(async (req, res) => {
        const routes = Object.keys(routeTable);
        let match = false;
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            const parsedRoute = parseUrl(route);
            if (new RegExp(parsedRoute).test(req.url ?? '') && routeTable[route][req.method?.toLowerCase() ?? '']) {
                let cb = routeTable[route][req.method?.toLowerCase() ?? ''];
                let middleware = routeTable[route][`${req.method?.toLowerCase()}-middleware`];
                const m = req.url?.match(new RegExp(parsedRoute));
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
    function registerPath(path, cb, method, middleware) {
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
        get: (path, ...rest) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'get');
            }
            else {
                registerPath(path, rest[1], 'get', rest[0]);
            }
        },
        post: (path, ...rest) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'post');
            }
            else {
                registerPath(path, rest[1], 'post', rest[0]);
            }
        },
        put: (path, ...rest) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'put');
            }
            else {
                registerPath(path, rest[1], 'put', rest[0]);
            }
        },
        delete: (path, ...rest) => {
            if (rest.length === 1) {
                registerPath(path, rest[0], 'delete');
            }
            else {
                registerPath(path, rest[1], 'delete', rest[0]);
            }
        },
        listen: (port, cb) => {
            server.listen(port, cb);
            return {
                message: (message) => {
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
