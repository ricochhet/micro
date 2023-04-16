export var SearchType;
(function (SearchType) {
    SearchType[SearchType["TopFilesOnly"] = 0] = "TopFilesOnly";
    SearchType[SearchType["SearchAllFiles"] = 1] = "SearchAllFiles";
    SearchType[SearchType["TopDirectoriesOnly"] = 2] = "TopDirectoriesOnly";
    SearchType[SearchType["SearchAllDirectories"] = 3] = "SearchAllDirectories";
})(SearchType || (SearchType = {}));
