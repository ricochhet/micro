// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

export interface ISettings {
    templates: Array<object>;
    components: Array<object>;
    build: IBuildSettings;
    publish: IPublishSettings;
}

export interface IPublishSettings {
    resources: IPublishData;
    cname: IPublishData;
}

export interface IPublishData {
    data: string;
    output: string;
}

export interface IBuildSettings {
    templates: Array<string>;
    components: Array<string>;
    pages: Array<IBuildData>;
}

export interface IBuildData {
    path: string;
    output: string;
    templates: Array<ITemplate>;
    components: Array<string>;
}

export interface ITemplate {
    name: string;
    data: object;
}

export interface IData {
    name: string;
    data: string;
}

export interface IStagingData {
    path: string;
    output: string;
    data: string;
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
