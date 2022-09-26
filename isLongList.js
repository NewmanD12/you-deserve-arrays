const prompt = require('prompt-sync')({sigint: true});

let user_array = JSON.parse(prompt("Please enter your array: "));

if(user_array.length < 10){
    console.log(false)
}   else {
    console.log(true)
}