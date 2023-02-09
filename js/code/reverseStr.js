const reverseString = (str) => {
    if(!str) return ''
    const splitStirng = str.split('').reverse().join('')
    return splitStirng

};

export { reverseString }