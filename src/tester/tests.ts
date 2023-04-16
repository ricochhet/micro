import Tester from "./Tester"
import { StatusType } from "./enum/StatusType"

Tester.assert('expect (100 === 200) should equal FAILURE', (expect) => {
    expect(expect(100, true).toEqualValueAndType(200)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (100 === 100) should equal SUCCESS', (expect) => {
    expect(expect(100, true).toEqualValueAndType(100)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (2000.0000001 === 1000.0000001) should equal SUCCESS', (expect) => {
    expect(expect(2000.0000001, true).toEqualValueAndType(1000.0000001)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (1000.0000001 === 1000.0000001) should equal SUCCESS', (expect) => {
    expect(expect(1000.0000001, true).toEqualValueAndType(1000.0000001)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (-10.0123 === 10.0123) should equal SUCCESS', (expect) => {
    expect(expect(-10.0123, true).toEqualValueAndType(10.0123)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (-10.0123 === -10.0123) should equal SUCCESS', (expect) => {
    expect(expect(-10.0123, true).toEqualValueAndType(-10.0123)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect ("hello" === "HELLO") should equal FAILURE', (expect) => {
    expect(expect("hello", true).toEqualValueAndType("HELLO")).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ("hello" === "hello") should equal SUCCESS', (expect) => {
    expect(expect("hello", true).toEqualValueAndType("hello")).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect ("hello" + "WORLD" === "helloworld") should equal FAILURE', (expect) => {
    expect(expect("hello" + "WORLD", true).toEqualValueAndType("helloworld")).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ("hello" + "world" === "helloworld") should equal SUCCESS', (expect) => {
    expect(expect("hello" + "world", true).toEqualValueAndType("helloworld")).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect ("1234" === 1234) should equal FAILURE', (expect) => {
    expect(expect("1234", true).toEqualValueAndType(1234)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ("1234" == 1234) should equal SUCCESS', (expect) => {
    expect(expect("1234", true).toEqualValue(1234)).toEqualValue(StatusType.SUCCESS)
})

Tester.assert('expect ([1,2,3] === [1,2,3]) should equal FAILURE', (expect) => {
    expect(expect([1, 2, 3], true).toEqualValueAndType([1, 2, 3])).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', (expect) => {
    expect(expect([1, 2, 3], true).toEqualValue([3, 2, 1])).toEqualValue(StatusType.FAILURE)
})

Tester.assert('expect ([1,2,3] == [3,2,1]) should equal FAILURE', (expect) => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([3, 2, 1])).toEqualValue(StatusType.FAILURE)
})

Tester.assert('expect ([1,2,3] == [1,2,3]) should equal SUCCESS', (expect) => {
    expect(expect([1, 2, 3], true).toEqualValueAsArray([1, 2, 3])).toEqualValue(StatusType.SUCCESS)
})

Tester.assert('expect ([1,2,[4,5]] == [[-1,0,1],2,3]) should equal FAILURE', (expect) => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsArray([[-1, 0, 1], 2, 3])).toEqualValue(StatusType.FAILURE)
})

Tester.assert('expect ([1,2,[4,5]] == [1,2,[4,5]]) should equal SUCCESS', (expect) => {
    expect(expect([1, 2, [4, 5]], true).toEqualValueAsArray([1, 2, [4, 5]])).toEqualValue(StatusType.SUCCESS)
})

Tester.assert('expect (["a", "b", "c"] === ["a", "b", "c"]) should equal FAILURE', (expect) => {
    expect(expect(["a", "b", "c"], true).toEqualValueAndType(["a", "b", "c"])).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (["a", "b", "c"] == ["a", "b", "c"]) should equal FAILURE', (expect) => {
    expect(expect(["a", "b", "c"], true).toEqualValue(["a", "b", "c"])).toEqualValue(StatusType.FAILURE)
})

Tester.assert('expect (true === false) should equal FAILURE', (expect) => {
    expect(expect(true, true).toEqualValueAndType(false)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (true === true) should equal SUCCESS', (expect) => {
    expect(expect(true, true).toEqualValueAndType(true)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (object === object) should equal SUCCESS', (expect) => {
    expect(expect({ test: "hi" }, true).toEqualValueAsObject({ test: "hi" })).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (object === object) should equal FAILURE', (expect) => {
    expect(expect({ test: "hi" }, true).toEqualValueAsObject({ test: "hello" })).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (object === object) should equal SUCCESS', (expect) => {
    expect(expect({ test: "hi", test1: { test2: ["hello"], test3: "hey" }}, true).toEqualValueAsObject({ test: "hi", test1: { test2: ["hello"], test3: "hey" }})).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (object === object) should equal FAILURE', (expect) => {
    expect(expect({ test: "hi", test1: { test2: ["hello"], test3: "hey" }}, true).toEqualValueAsObject({ test1: { test3: "hey", test2: ["hello"], test: "hi", }})).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ("hello" === 256) should equal FAILURE', (expect) => {
    expect(expect("hello", true).toEqualType(256)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect ("hello" === "256") should equal SUCCESS', (expect) => {
    expect(expect("hello", true).toEqualType("256")).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (256 === 256.0) should equal SUCCESS', (expect) => {
    expect(expect(256, true).toEqualType(256.256)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (256 === 256.0) should equal FAILURE', (expect) => {
    expect(expect(256, true).toEqualValueAndType(256.256)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (() => {} === null) should equal FAILURE', (expect) => {
    expect(expect(() => {}, true).toEqualValueAndType(null)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (undefined === null) should equal FAILURE', (expect) => {
    expect(expect(undefined, true).toEqualValueAndType(null)).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (undefined === undefined) should equal SUCCESS', (expect) => {
    expect(expect(undefined, true).toEqualValueAndType(undefined)).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (() => { console.log("hi") } === "hi") should equal FAILURE', (expect) => {
    expect(expect(() => { console.log("hi") }, true).toEqualValueAndType("hi")).toEqualValueAndType(StatusType.FAILURE)
})

Tester.assert('expect (() => { return "hi" } === "hi") should equal SUCCESS', (expect) => {
    expect(expect(() => { return "hi" }, true).toEqualFunction("hi")).toEqualValueAndType(StatusType.SUCCESS)
})

Tester.assert('expect (() => { return "hi" } === "hello") should equal FAILURE', (expect) => {
    expect(expect(() => { return "hi" }, true).toEqualFunction("hello")).toEqualValueAndType(StatusType.FAILURE)
})

Tester.report()