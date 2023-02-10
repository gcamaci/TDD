import { analyzeArray } from "../code/analyzeArray";

test('check properties of object',() => {
    const object = analyzeArray([1,2,3,4])
    expect(object.min).toBe(1)
    expect(object.max).toBe(4)
    expect(object.average).toBe(2.5)
})