// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { json, preload } from './core/_Preloader';
import { generateTemplates } from './core/TemplateBuilder';
import { generateComponents } from './core/ComponentBuilder';
import { IBuildData, IData, ISettings, IStagingData, ITemplate } from './interfaces/ISettings';
import FsProvider from '../../core/providers/FsProvider';

export default class BuildSystem {
    private static buffer: ISettings;
    private static templates: Array<IData> = [];
    private static components: Array<IData> = [];
    private static pages: Array<IBuildData> = [];
    private static generatedTemplates: Array<IData> = [];
    private static stagingData: Array<IStagingData> = [];

    public static Set(src: string = './settings.json'): void {
        this.buffer = json(src);
        this.templates = preload(this.buffer.build.templates as Array<string>);
        this.components = preload(this.buffer.build.components as Array<string>);
        this.pages = this.buffer.build.pages;
    }

    public static Stage(): void {
        for (const i in this.pages) {
            const page: IBuildData = this.pages[i];
            const pagePath: string = page.path;
            let pageData: string = FsProvider.ReadFileSync(pagePath);
            const pageComponents: Array<string> = page.components;
            const pageTemplates: Array<ITemplate> = page.templates;

            this.generatedTemplates = generateTemplates(pageTemplates, this.templates);
            pageData = generateComponents(pageData, pageComponents, this.components, this.generatedTemplates);

            this.stagingData.push({
                path: pagePath,
                output: page.output,
                data: pageData,
            });
        }
    }

    public static Build(): void {
        for (const i in this.stagingData) {
            FsProvider.WriteFileSync(this.stagingData[i].output, this.stagingData[i].data);
        }

        FsProvider.CopyDirectory(this.buffer.publish.resources.data, this.buffer.publish.resources.output);
        FsProvider.WriteFileSync(this.buffer.publish.cname.output, this.buffer.publish.cname.data);
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
