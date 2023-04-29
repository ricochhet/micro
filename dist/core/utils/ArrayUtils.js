// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
export default class ArrayUtils {
    static sumArray(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
    static flattenArray(arr) {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }
    static uniqueArray(arr) {
        return [...new Set(arr)];
    }
    static lastItem(arr) {
        return arr[arr.length - 1];
    }
    static shuffleArray(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    static groupArrayBy(arr, key) {
        return arr.reduce((acc, obj) => {
            const groupKey = obj[key];
            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }
            acc[groupKey].push(obj);
            return acc;
        }, {});
    }
    static sortBy(arr, key, ascending = true) {
        const sortedArr = arr.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });
        return ascending ? sortedArr : sortedArr.reverse();
    }
    static equals(a, b) {
        if (!b) {
            return false;
        }
        if (b === a)
            return true;
        if (a.length != b.length) {
            return false;
        }
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!ArrayUtils.equals(a[i], b[i])) {
                    return false;
                }
            }
            else if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
    static isEqual(array, target) {
        return target.every(i => array.includes(i));
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
