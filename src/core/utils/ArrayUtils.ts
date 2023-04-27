// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

export default class ArrayUtils {
    public static sumArray(arr: number[]): number {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    public static flattenArray<T>(arr: T[][]): T[] {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }

    public static uniqueArray<T>(arr: T[]): T[] {
        return [...new Set(arr)];
    }

    public static lastItem<T>(arr: T[]): T {
        return arr[arr.length - 1];
    }

    public static shuffleArray<T>(arr: T[]): T[] {
        const shuffled: T[] = [...arr];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    public static groupArrayBy<T>(arr: T[], key: string): Record<string, T[]> {
        return arr.reduce((acc, obj) => {
            const groupKey = obj[key];

            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }

            acc[groupKey].push(obj);
            return acc;
        }, {});
    }

    public static sortBy<T>(arr: T[], key: string, ascending: boolean = true): T[] {
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

    public static Equals = (a: Array<any>, b: Array<any>): boolean => {
        if (!b) {
            return false;
        }

        if (b === a) return true;

        if (a.length != b.length) {
            return false;
        }

        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!ArrayUtils.Equals(a[i], b[i])) {
                    return false;
                }
            } else if (a[i] != b[i]) {
                return false;
            }
        }

        return true;
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
