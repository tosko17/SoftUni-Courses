function concatenateData (input){
let name = input[0];
let surname = input[1];
let age = Number(input[2]);
let town = input[3];
let str = "You are " + name +" "+ surname + ", a "+ age + "-years old person from " + town +"."
console-console.log(str);
}

concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])