function fishTank (input){
let h = Number(input[0]);
let w = Number(input[1]);
let l = Number(input[2]);
let percent = 1- Number(input[3])/100;

let total = h*w*l*0.001 * percent; 
console.log(total);
}

fishTank([85,75,47,17])