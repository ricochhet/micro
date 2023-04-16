// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import { json, preload } from './core/_Preloader';
import { generateTemplates } from './core/TemplateBuilder';
import { generateComponents } from './core/ComponentBuilder';
import FsProvider from '../../providers/generic/FsProvider';
class BuildSystem {
    static buffer;
    static templates = [];
    static components = [];
    static pages = [];
    static generatedTemplates = [];
    static stagingData = [];
    static Set(src = './settings.json') {
        this.buffer = json(src);
        this.templates = preload(this.buffer.build.templates);
        this.components = preload(this.buffer.build.components);
        this.pages = this.buffer.build.pages;
    }
    static Stage() {
        for (const i in this.pages) {
            const page = this.pages[i];
            const pagePath = page.path;
            let pageData = FsProvider.ReadFileSync(pagePath);
            const pageComponents = page.components;
            const pageTemplates = page.templates;
            this.generatedTemplates = generateTemplates(pageTemplates, this.templates);
            pageData = generateComponents(pageData, pageComponents, this.components, this.generatedTemplates);
            this.stagingData.push({
                path: pagePath,
                output: page.output,
                data: pageData,
            });
        }
    }
    static Build() {
        for (const i in this.stagingData) {
            FsProvider.WriteFileSync(this.stagingData[i].output, this.stagingData[i].data);
        }
        FsProvider.CopyDirectory(this.buffer.publish.resources.data, this.buffer.publish.resources.output);
        FsProvider.WriteFileSync(this.buffer.publish.cname.output, this.buffer.publish.cname.data);
    }
}
export default BuildSystem;
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
