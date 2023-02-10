import { ceaserCipher, checkChar } from "../code/ceaser";


test('character is truthy', () => {
    expect(checkChar('a')).toBeTruthy()
    expect(checkChar(1)).toBeFalsy()
})

test('shift works', () => {
    expect(ceaserCipher('a',1)).toBe('b')
    expect(ceaserCipher('Storm the Building',4)).toBe('wxsvq xli fymphmrk')
    expect(ceaserCipher('Hello World!',3)).toBe('khoor zruog!')
})