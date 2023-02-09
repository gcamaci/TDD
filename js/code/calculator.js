const calculator = () => {
    const add = (a,b) => a + b;
    const subract = (a,b) => a -b;
    const divide = (a,b) => a/b;
    const multiply = (a,b) => a * b;
    
    return {
        add,
        subract,
        divide,
        multiply

    }
}

export {calculator}