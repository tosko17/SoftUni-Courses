function foodDelivery(input){
let chiken = Number(input[0])*10.35;
let fish = Number(input[1])*12.40;
let vegetal = Number(input[2])*8.15;

let totalSum = (chiken+fish+vegetal)*1.2 +2.5;
console.log(totalSum);

}

foodDelivery([2,4,3])