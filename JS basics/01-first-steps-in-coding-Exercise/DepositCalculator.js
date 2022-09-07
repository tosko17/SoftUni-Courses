function depositCalculator(input){
let deposit = Number(input[0]);
let mounts = Number(input[1]);
let percent4year = Number(input[2])/100;

let totalsum = deposit + mounts * ((deposit * percent4year)/12);
console.log(totalsum);

}

depositCalculator([200, 3, 5.7])