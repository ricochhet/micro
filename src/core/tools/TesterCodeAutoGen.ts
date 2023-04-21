// Copyright (c) 2023 Jon
// See end of file for extended copyright information.

import FsProvider from '../providers/FsProvider';

interface ITestItem {
    expect: any;
    equal: any;
    expectFail?: boolean;
    isString?: boolean;
}

const testItemList: Array<ITestItem> = [
    { expect: 1, equal: 1 },
    { expect: 'equals-test', equal: 'equals-test', isString: true },
    { expect: 'expect-failure', equal: 'expect-success', expectFail: true, isString: true },
];

export const TesterCodeAutoGen = (out: string) => {
    const generatedScript: Array<string> = [];
    generatedScript.push('// --------------<autogenerated>-------------- //\n');
    generatedScript.push(FsProvider.ReadFileSync('./src/core/tools/license-parts/LicenseHeader.md') + '\n');
    generatedScript.push(`import Tester from '../src/tester/Tester';`);
    generatedScript.push(`import { StatusType } from '../src/tester/enum/StatusType';`);

    for (const i in testItemList) {
        let expectValue: any = '';
        let equalValue: any = '';

        if (testItemList[i].isString) {
            expectValue = `"${testItemList[i].expect}"`;
            equalValue = `"${testItemList[i].equal}"`;
        } else {
            expectValue = testItemList[i].expect;
            equalValue = testItemList[i].equal;
        }

        if (testItemList[i].expectFail === true) {
            generatedScript.push(
                `Tester.assert('exppect "${expectValue}" to equal "${equalValue} with result "FAILURE"', expect => { expect(expect(${expectValue}, true).toEqualValue(${equalValue})).toEqualValueAndType(StatusType.FAILURE) });\n`,
            );
        } else {
            generatedScript.push(
                `Tester.assert('exppect "${expectValue}" to equal "${equalValue} with result "SUCCESS"', expect => { expect(expect(${expectValue}, true).toEqualValue(${equalValue})).toEqualValueAndType(StatusType.SUCCESS) });\n`,
            );
        }
    }

    generatedScript.push('\n' + FsProvider.ReadFileSync('./src/core/tools/license-parts/LicenseFooter.md'));
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
