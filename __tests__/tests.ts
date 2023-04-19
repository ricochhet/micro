// Probably contains numerous repeated tests, most things have been copy pasted. :)
import Logger from '../src/modules/logger/Logger';
import { LogType } from '../src/modules/logger/enums/LogType';
import Tester from '../src/modules/tester/Tester';
import { StatusType } from '../src/modules/tester/enum/StatusType';

Logger.Log(LogType.WARN, '-------------BLOCK 1------------');
Tester.assert('expect (100 === 200) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualValueAndType(200)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 200) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualValue(200)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 200) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualValueAsArray(200)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 200) should equal SUCCESS', expect => {
    expect(expect(100, true).toEqualType(200)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (100 === 200) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualFunction(200)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 200) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualValueAsObject(200)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 2------------');
Tester.assert('expect (100 === 100) should equal SUCCESS', expect => {
    expect(expect(100, true).toEqualValueAndType(100)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (100 === 100) should equal SUCCESS', expect => {
    expect(expect(100, true).toEqualValue(100)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (100 === 100) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualValueAsArray(100)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 100) should equal SUCCESS', expect => {
    expect(expect(100, true).toEqualType(100)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (100 === 100) should equal FAILURE', expect => {
    expect(expect(100, true).toEqualFunction(100)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (100 === 100) should equal SUCCESS', expect => {
    expect(expect(100, true).toEqualValueAsObject(100)).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 3------------');
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(2000.0000001, true).toEqualValueAndType(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(2000.0000001, true).toEqualValue(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(2000.0000001, true).toEqualValueAsArray(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal SUCCESS', expect => {
    expect(expect(2000.0000001, true).toEqualType(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(2000.0000001, true).toEqualFunction(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (2000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(2000.0000001, true).toEqualValueAsObject(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 4------------');
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal SUCCESS', expect => {
    expect(expect(1000.0000001, true).toEqualValueAndType(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal SUCCESS', expect => {
    expect(expect(1000.0000001, true).toEqualValue(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(1000.0000001, true).toEqualValueAsArray(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal SUCCESS', expect => {
    expect(expect(1000.0000001, true).toEqualType(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal FAILURE', expect => {
    expect(expect(1000.0000001, true).toEqualFunction(1000.0000001)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (1000.0000001 === 1000.0000001) should equal SUCCESS', expect => {
    expect(expect(1000.0000001, true).toEqualValueAsObject(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 5------------');
Tester.assert('expect (-10.0123 === 10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualValueAndType(10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === 10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualValue(10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === 10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualValueAsArray(10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === 10.0123) should equal SUCCESS', expect => {
    expect(expect(-10.0123, true).toEqualType(10.0123)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (-10.0123 === 10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualFunction(10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === 10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualValueAsObject(10.0123)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 6------------');
Tester.assert('expect (-10.0123 === -10.0123) should equal SUCCESS', expect => {
    expect(expect(-10.0123, true).toEqualValueAndType(-10.0123)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (-10.0123 === -10.0123) should equal SUCCESS', expect => {
    expect(expect(-10.0123, true).toEqualValue(-10.0123)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (-10.0123 === -10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualValueAsArray(-10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === -10.0123) should equal SUCCESS', expect => {
    expect(expect(-10.0123, true).toEqualType(-10.0123)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (-10.0123 === -10.0123) should equal FAILURE', expect => {
    expect(expect(-10.0123, true).toEqualFunction(-10.0123)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (-10.0123 === -10.0123) should equal SUCCESS', expect => {
    expect(expect(-10.0123, true).toEqualValueAsObject(-10.0123)).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 7------------');
Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAndType('HELLO')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValue('HELLO')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsArray('HELLO')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "HELLO") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualType('HELLO')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualFunction('HELLO')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsObject('HELLO')).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 8------------');
Tester.assert('expect ("hello" === "hello") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualValueAndType('hello')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" === "hello") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualValue('hello')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" === "hello") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsArray('hello')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "hello") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualType('hello')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" === "hello") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualFunction('hello')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "hello") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualValueAsObject('hello')).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 9------------');
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualValueAndType('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualValue('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualValueAsArray('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal SUCCESS', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualType('helloworld')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualFunction('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'WORLD', true).toEqualValueAsObject('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 10------------');
Tester.assert('expect ("hello" + "world" === "helloworld") should equal SUCCESS', expect => {
    expect(expect('hello' + 'world', true).toEqualValueAndType('helloworld')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" + "world" === "helloworld") should equal SUCCESS', expect => {
    expect(expect('hello' + 'world', true).toEqualValue('helloworld')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" + "world" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'world', true).toEqualValueAsArray('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "world" === "helloworld") should equal SUCCESS', expect => {
    expect(expect('hello' + 'world', true).toEqualType('helloworld')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" + "world" === "helloworld") should equal FAILURE', expect => {
    expect(expect('hello' + 'world', true).toEqualFunction('helloworld')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" + "world" === "helloworld") should equal SUCCESS', expect => {
    expect(expect('hello' + 'world', true).toEqualValueAsObject('helloworld')).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 11------------');
Tester.assert('expect ("1234" === 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAndType(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" === 1234) should equal SUCCESS', expect => {
    expect(expect('1234', true).toEqualValue(1234)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("1234" === 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAsArray(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" === 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualType(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" === 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualFunction(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" === 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAsObject(1234)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 12------------');
Tester.assert('expect ("1234" == 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAndType(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" == 1234) should equal SUCCESS', expect => {
    expect(expect('1234', true).toEqualValue(1234)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("1234" == 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAsArray(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" == 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualType(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" == 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualFunction(1234)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("1234" == 1234) should equal FAILURE', expect => {
    expect(expect('1234', true).toEqualValueAsObject(1234)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 13------------');
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAndType([1, 2, 3])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValue([1, 2, 3])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([1, 2, 3])).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualType([1, 2, 3])).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualFunction([1, 2, 3])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] === [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsObject([1, 2, 3])).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 14------------');
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAndType([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValue([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualType([3, 2, 1])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualFunction([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsObject([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 15------------');
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAndType([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValue([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualType([3, 2, 1])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualFunction([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsObject([3, 2, 1])).toEqualValue(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 16------------');
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAndType([1, 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualValue([1, 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([1, 2, 3])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualType([1, 2, 3])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, 3], true).toEqualFunction([1, 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,3] == [1,2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, 3], true).toEqualValueAsObject([1, 2, 3])).toEqualValue(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 17------------');
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAndType([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValue([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsArray([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal SUCCESS', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualType([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualFunction([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsObject([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 18------------');
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAndType([1, 2, [4, 5]])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValue([1, 2, [4, 5]])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal SUCCESS', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsArray([1, 2, [4, 5]])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal SUCCESS', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualType([1, 2, [4, 5]])).toEqualValue(StatusType.SUCCESS);
});
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal FAILURE', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualFunction([1, 2, [4, 5]])).toEqualValue(StatusType.FAILURE);
});
Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal SUCCESS', expect => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsObject([1, 2, [4, 5]])).toEqualValue(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 19------------');
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal FAILURE', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualValueAndType(['a', 'b', 'c'])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal FAILURE', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualValue(['a', 'b', 'c'])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal SUCCESS', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualValueAsArray(['a', 'b', 'c'])).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal SUCCESS', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualType(['a', 'b', 'c'])).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal FAILURE', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualFunction(['a', 'b', 'c'])).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal SUCCESS', expect => {
    expect(expect(['a', 'b', 'c'], true).toEqualValueAsObject(['a', 'b', 'c'])).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 20------------');
Tester.assert('expect (true === false) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualValueAndType(false)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === false) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualValue(false)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === false) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualValueAsArray(false)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === false) should equal SUCCESS', expect => {
    expect(expect(true, true).toEqualType(false)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (true === false) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualFunction(false)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === false) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualValueAsObject(false)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 21------------');
Tester.assert('expect (true === true) should equal SUCCESS', expect => {
    expect(expect(true, true).toEqualValueAndType(true)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (true === true) should equal SUCCESS', expect => {
    expect(expect(true, true).toEqualValue(true)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (true === true) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualValueAsArray(true)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === true) should equal SUCCESS', expect => {
    expect(expect(true, true).toEqualType(true)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (true === true) should equal FAILURE', expect => {
    expect(expect(true, true).toEqualFunction(true)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (true === true) should equal SUCCESS', expect => {
    expect(expect(true, true).toEqualValueAsObject(true)).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 22------------');
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAndType({ test: 'hi' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValue({ test: 'hi' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAsArray({ test: 'hi' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(expect({ test: 'hi' }, true).toEqualType({ test: 'hi' })).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualFunction({ test: 'hi' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAsObject({ test: 'hi' })).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 23------------');
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAndType({ test: 'hello' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValue({ test: 'hello' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAsArray({ test: 'hello' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(expect({ test: 'hi' }, true).toEqualType({ test: 'hello' })).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualFunction({ test: 'hello' })).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi' }, true).toEqualValueAsObject({ test: 'hello' })).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 24------------');
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAndType({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValue({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } })).toEqualValueAndType(
        StatusType.FAILURE,
    );
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAsArray({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualType({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } })).toEqualValueAndType(
        StatusType.SUCCESS,
    );
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualFunction({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } })).toEqualValueAndType(
        StatusType.FAILURE,
    );
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAsObject({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }),
    ).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 25------------');
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAndType({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } }),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValue({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } })).toEqualValueAndType(
        StatusType.FAILURE,
    );
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAsArray({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } }),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (object === object) should equal SUCCESS', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualType({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } })).toEqualValueAndType(
        StatusType.SUCCESS,
    );
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualFunction({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } })).toEqualValueAndType(
        StatusType.FAILURE,
    );
});
Tester.assert('expect (object === object) should equal FAILURE', expect => {
    expect(
        expect({ test: 'hi', test1: { test2: ['hello'], test3: 'hey' } }, true).toEqualValueAsObject({ test1: { test3: 'hey', test2: ['hello'], test: 'hi' } }),
    ).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 26------------');
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAndType(256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValue(256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsArray(256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualType(256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualFunction(256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === 256) should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsObject(256)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 27------------');
Tester.assert('expect ("hello" === "256") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAndType('256')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "256") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValue('256')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "256") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsArray('256')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "256") should equal SUCCESS', expect => {
    expect(expect('hello', true).toEqualType('256')).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect ("hello" === "256") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualFunction('256')).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect ("hello" === "256") should equal FAILURE', expect => {
    expect(expect('hello', true).toEqualValueAsObject('256')).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 28------------');
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAndType(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValue(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAsArray(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal SUCCESS', expect => {
    expect(expect(256, true).toEqualType(256.256)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualFunction(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAsObject(256.256)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 29------------');
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAndType(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValue(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAsArray(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal SUCCESS', expect => {
    expect(expect(256, true).toEqualType(256.256)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualFunction(256.256)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (256 === 256.0) should equal FAILURE', expect => {
    expect(expect(256, true).toEqualValueAsObject(256.256)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 30------------');
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualValueAndType(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualValue(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualValueAsArray(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualType(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualFunction(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => {} === null) should equal FAILURE', expect => {
    expect(expect(() => {}, true).toEqualValueAsObject(null)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 31------------');
Tester.assert('expect (undefined === null) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualValueAndType(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === null) should equal SUCCESS', expect => {
    expect(expect(undefined, true).toEqualValue(null)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (undefined === null) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualValueAsArray(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === null) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualType(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === null) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualFunction(null)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === null) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualValueAsObject(null)).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 32------------');
Tester.assert('expect (undefined === undefined) should equal SUCCESS', expect => {
    expect(expect(undefined, true).toEqualValueAndType(undefined)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (undefined === undefined) should equal SUCCESS', expect => {
    expect(expect(undefined, true).toEqualValue(undefined)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (undefined === undefined) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualValueAsArray(undefined)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === undefined) should equal SUCCESS', expect => {
    expect(expect(undefined, true).toEqualType(undefined)).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (undefined === undefined) should equal FAILURE', expect => {
    expect(expect(undefined, true).toEqualFunction(undefined)).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (undefined === undefined) should equal SUCCESS', expect => {
    expect(expect(undefined, true).toEqualValueAsObject(undefined)).toEqualValueAndType(StatusType.SUCCESS);
});

Logger.Log(LogType.WARN, '-------------BLOCK 33------------');
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualValueAndType('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualValue('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualValueAsArray('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualType('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualFunction('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            'hi';
        }, true).toEqualValueAsObject('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 34------------');
Tester.assert('expect (() => { return "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAndType('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValue('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAsArray('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualType('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hi") should equal SUCCESS', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualFunction('hi'),
    ).toEqualValueAndType(StatusType.SUCCESS);
});
Tester.assert('expect (() => { return "hi" } === "hi") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAsObject('hi'),
    ).toEqualValueAndType(StatusType.FAILURE);
});

Logger.Log(LogType.WARN, '-------------BLOCK 35------------');
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAndType('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValue('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAsArray('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualType('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualFunction('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});
Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', expect => {
    expect(
        expect(() => {
            return 'hi';
        }, true).toEqualValueAsObject('hello'),
    ).toEqualValueAndType(StatusType.FAILURE);
});

Tester.report();
