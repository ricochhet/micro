// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { IData, ISettings } from '../interfaces/ISettings';
import FsProvider from '../../../core/providers/FsProvider';

export const json = (sourcePath: string): ISettings => {
    return JSON.parse(FsProvider.ReadFileSync(sourcePath).toString());
};

export const preload = (listToLoadFrom: Array<string>): Array<IData> => {
    const loadedItems: Array<IData> = [];

    for (const name in listToLoadFrom) {
        loadedItems.push({
            name: name,
            data: FsProvider.ReadFileSync(listToLoadFrom[name]),
        });
    }

    return loadedItems;
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
