const prompt = require('prompt-sync')({sigint: true});

let user_array = JSON.parse(prompt("Please enter your array: "));

console.log(user_array[user_array.length - 1])