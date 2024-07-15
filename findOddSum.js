function getSumOfAnArray(number){
    let sum = 0;
    for(let i = 0; i< number.length ; i++){
        const index = i;
        const element = number[index];
        sum = sum + element;
        //console.log(index, element, sum)
    }
    return sum;
}


function findOddSum(number){
    const oddNumbers = [];
    let sum = 0;
    for(let i = 0; i< number.length ; i++){
        const index = i;
        const element = number[index];
        
        if(element % 2 == 0){
            console.log(index, element)
            oddNumbers.push(element)
        }
        
    }
    return oddNumbers
}

const myNumber = [12,23,34,45,56,67,54];
const oddNumbers = findOddSum(myNumber)
console.log(oddNumbers)
const oddNumberSum = getSumOfAnArray(oddNumbers)
console.log("The sum of odd Number is",oddNumberSum);