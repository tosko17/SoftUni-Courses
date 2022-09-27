function solve(chr1, chr2, chr3){

    let str = chr1.concat(chr2,chr3);
    let reverseSTR = str.split("").reverse().join(" ");

    console.log(reverseSTR);

}

solve('A',

'B',

'C');