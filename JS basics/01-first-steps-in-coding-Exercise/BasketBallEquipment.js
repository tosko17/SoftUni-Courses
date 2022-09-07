function basketball(input){
let bshoes = Number(input[0])*0.6;
let kit = bshoes*0.8;
let bball = kit *0.25;
let basc = bball*0.2;

let totalPrice= basc +bball+bshoes+kit + Number(input[0]);
console.log(totalPrice);
}

basketball([365])