import { reverseString } from "../code/reverseStr";

test('empty string', () => {
    expect(reverseString('Hello')).toStrictEqual('olleH')
});

