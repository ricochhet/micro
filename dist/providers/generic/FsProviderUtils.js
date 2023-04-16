// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import * as fs from 'fs';
import * as path from 'path';
export function EnsureDirectoryExistence(filePath) {
    const directoryName = path.dirname(filePath);
    if (fs.existsSync(directoryName)) {
        return true;
    }
    EnsureDirectoryExistence(directoryName);
    fs.mkdirSync(directoryName);
}
export function GetDirectories(directory) {
    return fs
        .readdirSync(directory)
        .map(i => path.join(directory, i))
        .filter(x => fs.statSync(x).isDirectory());
}
export function GetFiles(directory) {
    return fs
        .readdirSync(directory)
        .map(i => path.join(directory, i))
        .filter(x => fs.statSync(x).isFile());
}
export function GetDirectoriesRecursive(directory) {
    return [directory, ...GetDirectories(directory).map(GetDirectoriesRecursive)].flat();
}
export function WalkDirectory(directory) {
    const files = [];
    for (const file of _walkDirectory(directory)) {
        files.push(file);
    }
    return files;
}
export function _cleanEmptyDirectories(directory) {
    const isDirectory = fs.statSync(directory).isDirectory();
    if (!isDirectory)
        return;
    let files = fs.readdirSync(directory);
    if (files.length > 0) {
        files.forEach(file => {
            _cleanEmptyDirectories(path.join(directory, file));
        });
        files = fs.readdirSync(directory);
    }
    if (files.length == 0) {
        fs.rmdirSync(directory);
        return;
    }
}
export function _copyDirectory(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        entry.isDirectory() ? _copyDirectory(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
    }
}
function* _walkDirectory(directory) {
    const files = fs.readdirSync(directory, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* _walkDirectory(path.join(directory, file.name));
        }
        else {
            yield path.join(directory, file.name);
        }
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
