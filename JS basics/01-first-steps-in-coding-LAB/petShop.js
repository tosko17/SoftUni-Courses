function petShop (input){
let dogPackage = Number (input[0]) * 2.50;
let catPackage = Number (input[1]) * 4;
let sum = dogPackage+catPackage;

console.log(`${sum} lv.`)
}

petShop([5,4])