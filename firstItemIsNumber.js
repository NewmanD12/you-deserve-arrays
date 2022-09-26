const prompt = require('prompt-sync')({sigint: true});

let user_array = JSON.parse(prompt("Please enter your array: "));

if (typeof user_array[0] === 'number'){
    console.log(true)
}   else{
    console.log(false)
}
