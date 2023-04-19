// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import FsProvider from '../providers/generic/FsProvider';

interface ITestItem {
    expect: any;
    equal: any;
    expect_fail?: boolean;
    is_string?: boolean;
}

const test_items: Array<ITestItem> = [
    { expect: 1, equal: 1 },
    { expect: 'equals-test', equal: 'equals-test', is_string: true },
    { expect: 'expect-failure', equal: 'expect-success', expect_fail: true, is_string: true },
];

export const test_codegen = (out: string) => {
    const output: Array<string> = [];
    output.push('// --------------<autogenerated>-------------- //\n// ------------<test-codegen-ts.ts>----------- //\n');
    output.push(FsProvider.ReadFileSync('./src/tools/gen-license-parts/license-header.md') + '\n');
    output.push(`import Tester from '../src/tester/Tester';`);
    output.push(`import { StatusType } from '../src/tester/enum/StatusType';`);

    for (const i in test_items) {
        let expect_val: any = '';
        let equal_val: any = '';
        if (test_items[i].is_string) {
            expect_val = `"${test_items[i].expect}"`;
            equal_val = `"${test_items[i].equal}"`;
        } else {
            expect_val = test_items[i].expect;
            equal_val = test_items[i].equal;
        }

        if (test_items[i].expect_fail === true) {
            output.push(`Tester.assert('autogen', expect => { expect(expect(${expect_val}, true).toEqualValue(${equal_val})).toEqualValueAndType(StatusType.FAILURE) });\n`);
        } else {
            output.push(`Tester.assert('autogen', expect => { expect(${equal_val}).toEqualValue(${equal_val}) });\n`);
        }
    }

    output.push('\n' + FsProvider.ReadFileSync('./src/tools/gen-license-parts/license-footer.md'));
    FsProvider.WriteFileSync(out, output.join('\n'));
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