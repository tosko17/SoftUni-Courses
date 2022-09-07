function yardGreening(input){
let priceAllYard = Number(input[0])* 7.61;
let discount = priceAllYard * 0.18;
let totalPrice = priceAllYard - discount;

console.log(`The final price is: ${totalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`)

}

yardGreening(['550'])