import { LogType } from './LogType';
import { FgRed, FgWhite, FgYellow, FgGray, FgGreen } from '../utils/ConsoleColors';

export abstract class LogTypeHelper {
    public static Color(type: string): string {
        switch (type) {
            case LogType.DEBUG:
                return FgGray;
            case LogType.INFO:
                return FgWhite;
            case LogType.WARN:
                return FgYellow;
            case LogType.NATIVE:
                return FgGray;
            case LogType.ERROR:
                return FgRed;
            case LogType.SUCCESS:
                return FgGreen
            case LogType.BENCHMARK:
                return FgGray;
            default:
                throw new Error();
        }
    }
}
