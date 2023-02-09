const capitalizeString = (str) =>{
    if(str==='') return
    let newString = str.charAt(0).toUpperCase() + str.slice(1)
    
    return newString
}
export {capitalizeString}