const prompt = require('prompt-sync')({sigint: true});

let user_array = JSON.parse(prompt("Please enter your array: "));


if(user_array.length >= 4){
    console.log(user_array[3])
} else{
    console.log(user_array[user_array.length - 1])
}