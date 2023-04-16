import { LogTypeHelper } from './enums/LogTypeHelper';

export default class Logger {
    private static logList: string[] = [];

    public static async Log(type: string, error: string) {
        Logger.logList.push(`${new Date().toLocaleDateString()} [${type}]: ${error}`);
        Logger.Stdout(type, Logger.logList.slice(-1)[0]);

        this.Write();
    }

    private static async Write() {
        //        FsProvider.WriteFileSync(this.logLocation, Logger.logList.join("\n"))
    }

    private static Stdout(type: string, message: string) {
        process.stdout.write(`${LogTypeHelper.Color(type)}${message}\x1b[0m\n`);
    }
}
