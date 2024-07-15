function getSumOfAnArray(number){
    let sum = 0;
    for(let i = 0; i< number.length ; i++){
        const index = i;
        const element = number[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
}

const myNumber = [12,23,34,45,56,67,54];
getSumOfAnArray(myNumber)