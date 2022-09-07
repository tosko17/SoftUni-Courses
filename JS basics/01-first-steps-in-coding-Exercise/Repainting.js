function repainting (input){
let nailon = (Number(input[0])+2) *1.50;
let paint = Number(input[1]);
let mix = Number(input[2])*5;
let hours = Number(input[3]);

let totalSum = nailon + 0.40 + mix + (paint+(paint*0.1))*14.50;
let all = totalSum + (totalSum*0.3)*hours;

console.log(all);

}

repainting([10,11,4,8])