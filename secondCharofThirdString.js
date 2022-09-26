const prompt = require('prompt-sync')({sigint: true});

let user_array = JSON.parse(prompt("Please enter your array: "));

console.log(user_array)

if(user_array.length >= 3){
    if(typeof user_array[2] === 'string'){
        if(user_array[2].length >= 2){
            console.log(user_array[2][1])
        }   else{
            console.log(user_array[2] + ' is less than 2 characters long')
        }
    }   else{
        console.log('error: third item is not a string')
    }
}   else{
    console.log('error: array does not have 3 items')
}