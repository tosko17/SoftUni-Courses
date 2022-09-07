function s4School (input){
let packageOfPen = Number(input[0])*5.80;
let packageOfMar = Number(input[1])*7.20;
let clean = Number(input[2])*1.20;
let percentOfDiscount = Number(input[3])/100;

let totalSum = packageOfPen+ packageOfMar + clean;
let discount = totalSum - totalSum*percentOfDiscount;

console.log(discount);
}


 s4School([2,3,4,25])