const checkChar = (char) => {
    let letters = /[a-z]/
    return letters.test(char)
}

const ceaserCipher = (str,shift) =>{
    let characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let string = str.toLowerCase().split('').map((char) => {
        if(checkChar(char)){
            let index = (characters.indexOf(char) + shift) % 26;
            return characters[index]
        } else{
            return char
        }
        
    });

    return string.join('')

};

export {ceaserCipher, checkChar}