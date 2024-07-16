const names = ['abul','babul','dabul','cabul','ebul','abul','babul','dabul','cabul','ebul']

function removeDupluicate(names){
    const unique = [];
    for(let i =0 ; i<names.length ; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

var uniqueValues = removeDupluicate(names) ;
console.log(uniqueValues);