// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import { SearchType } from '../providers/enums/SearchType';
import FsProvider from '../providers/generic/FsProvider';

export const GenerateTypescriptImports = (path: string, out: string) => {
    const files: string[] = FsProvider.GetPaths(SearchType.SearchAllFiles, path);
    const generatedScript: string[] = [];
    generatedScript.push('// --------------<autogenerated>-------------- //\n// ------------<import-gen-ts.ts>------------ //\n');
    generatedScript.push(FsProvider.ReadFileSync('./src/tools/license-parts/LicenseHeader.md') + '\n');

    for (const i in files) {
        const file: string = files[i];

        if (FsProvider.GetExtName(file) === '.ts') {
            const fileName: string = FsProvider.GetBaseName(file.split('-').join('_').split('.').join('_'));
            generatedScript.push(
                `import * as microsys_${fileName.toLocaleLowerCase()} from ".${file
                    .split('\\')
                    .join('/')
                    .split('.')
                    .slice(0, -1)
                    .join('.')
                    .split(FsProvider.GetBaseName(path))
                    .join('')}"\nexport { microsys_${fileName.toLocaleLowerCase()} }`,
            );
        }
    }

    generatedScript.push('\n' + FsProvider.ReadFileSync('./src/tools/license-parts/LicenseFooter.md'));
    generatedScript.push('\n' + `microsys_modulesecuritywarning_ts.ModuleSecurityWarning("microsys.mod.ts")`);
    FsProvider.WriteFileSync(out, generatedScript.join('\n'));
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