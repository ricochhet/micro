import { LogTypeHelper } from './enums/LogTypeHelper';
import FsProvider from '../providers/generic/FsProvider';

export default class Logger {
    private static logList: string[] = [];
    private static outLog: boolean = false;
    private static outLogPath: string = '';

    public static Options(_out: boolean, _path: string) {
        this.outLog = _out;
        this.outLogPath = _path;
    }

    public static async Log(type: string, error: string) {
        Logger.logList.push(`${new Date().toLocaleDateString()} [${type}]: ${error}`);
        Logger.Stdout(type, Logger.logList.slice(-1)[0]);

        this.Write();
    }

    private static async Write() {
        if (this.outLog && this.outLogPath && this.outLogPath.length !== 0) {
            FsProvider.WriteFileSync(this.outLogPath, Logger.logList.join('\n'));
        }
    }

    private static Stdout(type: string, message: string) {
        process.stdout.write(`${LogTypeHelper.Color(type)}${message}\x1b[0m\n`);
    }
}
