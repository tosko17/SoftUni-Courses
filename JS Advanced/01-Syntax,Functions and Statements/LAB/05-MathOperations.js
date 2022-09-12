function solve(input1, input2, operator){

    let result;
    switch (operator){
        case '+': result = input1 + input2;break;
        case '-': result = input1 - input2;break;
        case '/': result = input1 / input2;break;
        case '*': result = input1 * input2;break;
        case '%': result = input1 % input2;break;
        case '**': result = input1 ** input2;break;
    }

    console.log(result)


}

solve(5,6,'+')