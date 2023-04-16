// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import * as crypto from 'crypto';
const bufferEqual = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    if (crypto.timingSafeEqual) {
        return crypto.timingSafeEqual(a, b);
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
export const timeSafeCompare = (a, b) => {
    const sa = String(a);
    const sb = String(b);
    const key = crypto.pseudoRandomBytes(32);
    const ah = crypto.createHmac('sha256', key).update(sa).digest();
    const bh = crypto.createHmac('sha256', key).update(sb).digest();
    return bufferEqual(ah, bh) && a === b;
};
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
