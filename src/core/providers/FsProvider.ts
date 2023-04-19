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

export default class FsProvider {
    private static CHECK_FILE_SAFETY: boolean = true;

    public static IsPathSafe(directory: string): boolean {
        const unsafeValues: string[] = ['desktop.ini', 'thumbs.db'];

        if (unsafeValues.includes(directory)) throw new UnsafeOpError('Unsafe file operation', 'Directory is unsafe');

        return true;
    }

    public static GetBaseName(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): string {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            return path.basename(directory, path.extname(directory));
        } catch (e) {
            const err: Error = <Error>e;
            throw new BaseError('Failed to return path.basename', err.message, null);
        }
    }

    public static GetExtName(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): string {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            return path.extname(directory);
        } catch (e) {
            const err: Error = <Error>e;
            throw new BaseError('Failed to return path.basename', err.message, null);
        }
    }

    public static ReadFileSync(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): string {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            return fs.readFileSync(directory).toString();
        } catch (e) {
            const err: Error = <Error>e;
            throw new FileReadError('Failed to read file', err.message, null);
        }
    }

    public static WriteFileSync(file: string, data: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileWriteError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(file);
            fs.writeFileSync(file, data);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileWriteError('Failed to write file', err.message, null);
        }
    }

    public static CopyFileSync(src: string, dest: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileCopyError | undefined {
        try {
            if (safety) {
                FsProvider.IsPathSafe(src);
                FsProvider.IsPathSafe(dest);
            }

            fs.copyFileSync(src, dest);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileCopyError('Failed to copy file', err.message, null);
        }
    }

    public static MkdirSync(directory: string, mode: MkdirMode = MkdirMode.ANY_EXISTENCE, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileWriteError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            switch (mode) {
                case MkdirMode.ANY_EXISTENCE:
                    fs.mkdirSync(directory);
                case MkdirMode.NO_EXISTENCE:
                    if (!FsProvider.ExistsSync(directory)) {
                        fs.mkdirSync(directory);
                    } else {
                        return new FileWriteError('Failed to write directory', 'Directory already exists', null);
                    }
                default:
                    throw new EnumError('MkdirMode', 'default');
            }
        } catch (e) {
            const err: Error = <Error>e;
            return new FileWriteError('Failed to write directory', err.message, null);
        }
    }

    public static RmSync(directory: string, options: fs.RmOptions, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileRemoveError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            fs.rmSync(directory, options);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileRemoveError('Failed to remove file', err.message, null);
        }
    }

    public static EnsureDirectory(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileWriteError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            this._ensureDirectory(directory);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileWriteError('Failed to ensure directory', err.message, null);
        }
    }

    public static CleanEmptyDirectories(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileRemoveError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(directory);
            FsProvider._cleanEmptyDirectories(directory);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileRemoveError('Failed to clean directory', err.message, null);
        }
    }

    public static CopyDirectory(src: string, dest: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): FileCopyError | undefined {
        try {
            if (safety) FsProvider.IsPathSafe(src) && FsProvider.IsPathSafe(dest);
            FsProvider._copyDirectory(src, dest);
        } catch (e) {
            const err: Error = <Error>e;
            return new FileCopyError('Failed to copy directory', err.message, null);
        }
    }

    public static ExistsSync(directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): boolean {
        if (safety) FsProvider.IsPathSafe(directory);
        return fs.existsSync(directory);
    }

    public static GetPaths(type: SearchType, directory: string, safety: boolean = FsProvider.CHECK_FILE_SAFETY): string[] {
        if (safety) FsProvider.IsPathSafe(directory);
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

    private static _ensureDirectory(filePath: string) {
        const directoryName: string = path.dirname(filePath);

        if (fs.existsSync(directoryName)) {
            return true;
        }

        FsProvider._ensureDirectory(directoryName);
        fs.mkdirSync(directoryName);
    }

    private static _cleanEmptyDirectories(directory: string) {
        const isDirectory: boolean = fs.statSync(directory).isDirectory();

        if (!isDirectory) return;

        let files: string[] = fs.readdirSync(directory);
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

    private static _copyDirectory(src: string, dest: string) {
        fs.mkdirSync(dest, { recursive: true });
        const entries = fs.readdirSync(src, { withFileTypes: true });

        for (let entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            entry.isDirectory() ? FsProvider._copyDirectory(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
        }
    }

    private static _getDirectories(directory: string): string[] {
        return fs
            .readdirSync(directory)
            .map(i => path.join(directory, i))
            .filter(x => fs.statSync(x).isDirectory());
    }

    private static _getDirectoriesRecursively(directory: string): string[] {
        return [directory, ...FsProvider._getDirectories(directory).map(FsProvider._getDirectoriesRecursively)].flat();
    }

    private static _walkDirectory(directory: string): string[] {
        const files: string[] = [];

        for (const file of FsProvider._walkDirectoryGenerator(directory)) {
            files.push(<string>file);
        }

        return files;
    }

    private static _getFiles(directory: string): string[] {
        return fs
            .readdirSync(directory)
            .map(i => path.join(directory, i))
            .filter(x => fs.statSync(x).isFile());
    }

    private static *_walkDirectoryGenerator(directory: string): Generator {
        const files = fs.readdirSync(directory, { withFileTypes: true });

        for (const file of files) {
            if (file.isDirectory()) {
                yield* FsProvider._walkDirectoryGenerator(path.join(directory, file.name));
            } else {
                yield path.join(directory, file.name);
            }
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
