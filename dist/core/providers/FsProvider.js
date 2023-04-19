// Copyright (c) 2023 Jon
// See end of file for extended copyright information.
import * as fs from 'fs';
import * as path from 'path';
import { SearchType } from './enums/SearchType';
import FileReadError from '../errors/FileReadError';
import FileCopyError from '../errors/FileCopyError';
import UnsafeOpError from '../errors/UnsafeOpError';
import FileWriteError from '../errors/FileWriteError';
import FileRemoveError from '../errors/FileRemoveError';
import { MkdirMode } from './enums/MkdirMode';
import EnumError from '../errors/EnumError';
import BaseError from '../errors/BaseError';
class FsProvider {
    static CHECK_FILE_SAFETY = true;
    static IsPathSafe(directory) {
        const unsafeValues = ['desktop.ini', 'thumbs.db'];
        if (unsafeValues.includes(directory))
            throw new UnsafeOpError('Unsafe file operation', 'Directory is unsafe');
        return true;
    }
    static GetBaseName(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            return path.basename(directory, path.extname(directory));
        }
        catch (e) {
            const err = e;
            throw new BaseError('Failed to return path.basename', err.message, null);
        }
    }
    static GetExtName(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            return path.extname(directory);
        }
        catch (e) {
            const err = e;
            throw new BaseError('Failed to return path.basename', err.message, null);
        }
    }
    static ReadFileSync(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            return fs.readFileSync(directory).toString();
        }
        catch (e) {
            const err = e;
            throw new FileReadError('Failed to read file', err.message, null);
        }
    }
    static WriteFileSync(file, data, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(file);
            fs.writeFileSync(file, data);
        }
        catch (e) {
            const err = e;
            return new FileWriteError('Failed to write file', err.message, null);
        }
    }
    static CopyFileSync(src, dest, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety) {
                FsProvider.IsPathSafe(src);
                FsProvider.IsPathSafe(dest);
            }
            fs.copyFileSync(src, dest);
        }
        catch (e) {
            const err = e;
            return new FileCopyError('Failed to copy file', err.message, null);
        }
    }
    static MkdirSync(directory, mode = MkdirMode.ANY_EXISTENCE, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            switch (mode) {
                case MkdirMode.ANY_EXISTENCE:
                    fs.mkdirSync(directory);
                case MkdirMode.NO_EXISTENCE:
                    if (!FsProvider.ExistsSync(directory)) {
                        fs.mkdirSync(directory);
                    }
                    else {
                        return new FileWriteError('Failed to write directory', 'Directory already exists', null);
                    }
                default:
                    throw new EnumError('MkdirMode', 'default');
            }
        }
        catch (e) {
            const err = e;
            return new FileWriteError('Failed to write directory', err.message, null);
        }
    }
    static RmSync(directory, options, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            fs.rmSync(directory, options);
        }
        catch (e) {
            const err = e;
            return new FileRemoveError('Failed to remove file', err.message, null);
        }
    }
    static EnsureDirectory(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            this._ensureDirectory(directory);
        }
        catch (e) {
            const err = e;
            return new FileWriteError('Failed to ensure directory', err.message, null);
        }
    }
    static CleanEmptyDirectories(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(directory);
            FsProvider._cleanEmptyDirectories(directory);
        }
        catch (e) {
            const err = e;
            return new FileRemoveError('Failed to clean directory', err.message, null);
        }
    }
    static CopyDirectory(src, dest, safety = FsProvider.CHECK_FILE_SAFETY) {
        try {
            if (safety)
                FsProvider.IsPathSafe(src) && FsProvider.IsPathSafe(dest);
            FsProvider._copyDirectory(src, dest);
        }
        catch (e) {
            const err = e;
            return new FileCopyError('Failed to copy directory', err.message, null);
        }
    }
    static ExistsSync(directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        if (safety)
            FsProvider.IsPathSafe(directory);
        return fs.existsSync(directory);
    }
    static GetPaths(type, directory, safety = FsProvider.CHECK_FILE_SAFETY) {
        if (safety)
            FsProvider.IsPathSafe(directory);
        switch (type) {
            case SearchType.TopFilesOnly:
                return FsProvider._getFiles(directory);
            case SearchType.SearchAllFiles:
                return FsProvider._walkDirectory(directory);
            case SearchType.TopDirectoriesOnly:
                return FsProvider._getDirectories(directory);
            case SearchType.SearchAllDirectories:
                return FsProvider._getDirectoriesRecursively(directory);
            default:
                throw new EnumError('SearchType', 'default');
        }
    }
    static _ensureDirectory(filePath) {
        const directoryName = path.dirname(filePath);
        if (fs.existsSync(directoryName)) {
            return true;
        }
        FsProvider._ensureDirectory(directoryName);
        fs.mkdirSync(directoryName);
    }
    static _cleanEmptyDirectories(directory) {
        const isDirectory = fs.statSync(directory).isDirectory();
        if (!isDirectory)
            return;
        let files = fs.readdirSync(directory);
        if (files.length > 0) {
            files.forEach(file => {
                FsProvider._cleanEmptyDirectories(path.join(directory, file));
            });
            files = fs.readdirSync(directory);
        }
        if (files.length == 0) {
            fs.rmdirSync(directory);
            return;
        }
    }
    static _copyDirectory(src, dest) {
        fs.mkdirSync(dest, { recursive: true });
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (let entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            entry.isDirectory() ? FsProvider._copyDirectory(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
        }
    }
    static _getDirectories(directory) {
        return fs
            .readdirSync(directory)
            .map(i => path.join(directory, i))
            .filter(x => fs.statSync(x).isDirectory());
    }
    static _getDirectoriesRecursively(directory) {
        return [directory, ...FsProvider._getDirectories(directory).map(FsProvider._getDirectoriesRecursively)].flat();
    }
    static _walkDirectory(directory) {
        const files = [];
        for (const file of FsProvider._walkDirectoryGenerator(directory)) {
            files.push(file);
        }
        return files;
    }
    static _getFiles(directory) {
        return fs
            .readdirSync(directory)
            .map(i => path.join(directory, i))
            .filter(x => fs.statSync(x).isFile());
    }
    static *_walkDirectoryGenerator(directory) {
        const files = fs.readdirSync(directory, { withFileTypes: true });
        for (const file of files) {
            if (file.isDirectory()) {
                yield* FsProvider._walkDirectoryGenerator(path.join(directory, file.name));
            }
            else {
                yield path.join(directory, file.name);
            }
        }
    }
}
export default FsProvider;
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
