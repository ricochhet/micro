import { LogTypeHelper } from './enums/LogTypeHelper';
import FsProvider from '../providers/generic/FsProvider';
class Logger {
    static logList = [];
    static outLog = false;
    static outLogPath = '';
    static Options(_out, _path) {
        this.outLog = _out;
        this.outLogPath = _path;
    }
    static async Log(type, error) {
        Logger.logList.push(`${new Date().toLocaleDateString()} [${type}]: ${error}`);
        Logger.Stdout(type, Logger.logList.slice(-1)[0]);
        this.Write();
    }
    static async Write() {
        if (this.outLog && this.outLogPath && this.outLogPath.length !== 0) {
            FsProvider.WriteFileSync(this.outLogPath, Logger.logList.join('\n'));
        }
    }
    static Stdout(type, message) {
        process.stdout.write(`${LogTypeHelper.Color(type)}${message}\x1b[0m\n`);
    }
}
export default Logger;
