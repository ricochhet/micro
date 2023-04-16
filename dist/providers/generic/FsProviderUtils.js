import * as fs from 'fs';
import * as path from 'path';
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
