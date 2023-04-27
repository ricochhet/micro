// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
export default class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static reverse(str) {
        return str.split('').reverse().join('');
    }
    static truncate(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
        else {
            return str.slice(0, maxLength) + '...';
        }
    }
    static isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }
    static countOccurrences(str, char) {
        return str.split(char).length - 1;
    }
    static removeWhitespace(str) {
        return str.replace(/\s+/g, '');
    }
    static startsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }
    static endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    static replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
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
