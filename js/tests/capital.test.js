import { capitalizeString } from "../capitalize";

test('string is empty', () => {
    expect(capitalizeString('')).toBeUndefined()
});

test('is capital', () => {
    expect(capitalizeString('giuseppe')).toStrictEqual('Giuseppe')
});

