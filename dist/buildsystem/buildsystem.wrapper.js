// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import { json, preload } from './core/_Preloader';
import { generateTemplates } from './core/TemplateBuilder';
import { generateComponents } from './core/ComponentBuilder';
import FsProvider from '../providers/generic/FsProvider';
const buffer = json('./settings.json');
const templates = preload(buffer.build.templates);
const components = preload(buffer.build.components);
const pages = buffer.build.pages;
let generatedTemplates = [];
let stagingData = [];
export default class BuildSystem {
    static Stage() {
        for (const i in pages) {
            const page = pages[i];
            const pagePath = page.path;
            let pageData = FsProvider.ReadFileSync(pagePath);
            const pageComponents = page.components;
            const pageTemplates = page.templates;
            generatedTemplates = generateTemplates(pageTemplates, templates);
            pageData = generateComponents(pageData, pageComponents, components, generatedTemplates);
            stagingData.push({
                path: pagePath,
                output: page.output,
                data: pageData,
            });
        }
    }
    static Build() {
        for (const i in stagingData) {
            FsProvider.WriteFileSync(stagingData[i].output, stagingData[i].data);
        }
        FsProvider.CopyDirectory(buffer.publish.resources.data, buffer.publish.resources.output);
        FsProvider.WriteFileSync(buffer.publish.cname.output, buffer.publish.cname.data);
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
