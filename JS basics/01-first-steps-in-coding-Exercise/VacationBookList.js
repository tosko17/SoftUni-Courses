function book(input){
let bookSpages = Number(input[0]);
let pages4hour = Number(input[1]);
let days = Number(input[2]);

let sum = bookSpages / pages4hour /days;
console.log(sum);
}

book([212,20,2])