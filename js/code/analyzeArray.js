const analyzeArray = (array) => {
    const length = array.length

    const average = array.reduce((total,num)=>{
        return total + num
    },0)/length

    const min = array.sort((a,b)=>a-b)[0]
    
    const max = array.sort((a,b)=>b-a)[0]



    return {average,length,min,max}
};  

export { analyzeArray }