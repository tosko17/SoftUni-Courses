function solve(number) {

    let strNum = number.toString();
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }

    console.log(sum);

}

solve(245678);
solve(97561);
solve(543);