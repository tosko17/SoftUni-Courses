function solve(chr1){

    let check = chr1.toUpperCase() !== chr1 ;

    console.log( check === true ? 'lower-case' : 'upper-case');

}

solve('l');
solve('K');
solve('T');
solve('q');