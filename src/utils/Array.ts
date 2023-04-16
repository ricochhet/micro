export default class ArrayUtils {
    public static Equals = (a: Array<any>, b: Array<any>): boolean => {
        if (!b) {
            console.log('what');

            return false;
        }

        if (b === a) return true;

        if (a.length != b.length) {
            return false;
        }

        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!ArrayUtils.Equals(a[i], b[i])) {
                    return false;
                }
            } else if (a[i] != b[i]) {
                return false;
            }
        }

        return true;
    };
}
