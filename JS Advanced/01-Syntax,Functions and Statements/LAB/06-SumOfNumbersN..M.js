function solve(n1, n2){

    n1 = Number(n1);
    n2 = Number(n2);

    result=0;
    for (let i = n1; i <= n2; i++){
         result += i;

    }
    return console.log(result);
}

solve('-8','20')