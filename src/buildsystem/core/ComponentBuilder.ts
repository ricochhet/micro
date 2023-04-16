// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { IData } from '../interfaces/ISettings';
import { parseTemplateString } from './TemplateBuilder';

export const generateComponents = (pageData: string, pageComponentList: Array<string>, loadedComponents: Array<IData>, generatedTemplates: Array<IData>): string => {
    let templatedString: string = pageData;

    for (const j in pageComponentList) {
        if (pageComponentList[j].includes('[template]')) {
            const templateString: { index: number; name: string } = parseTemplateString(pageComponentList[j]);
            const selectedTemplate: IData[] = generatedTemplates.filter(tmpl => tmpl.name == `{${templateString.name}}`);

            if (selectedTemplate.length > 0) {
                templatedString = templatedString.split(pageComponentList[j]).join(selectedTemplate[templateString.index].data);
            }
        } else {
            const component: IData | undefined = loadedComponents.find(c => c.name == pageComponentList[j]);
            templatedString = templatedString.split(pageComponentList[j]).join(component?.data);
        }
    }

    return templatedString;
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
