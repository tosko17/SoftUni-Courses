function math (input){

    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let symbol = input[2]

    let totalSum
    let evenOdd

    switch(symbol){

        case "+":
            totalSum= num1+num2
            break
        case "-":
            totalSum= num1-num2
            break
        case "*":
            totalSum= num1*num2
            break
        case "/":
            totalSum= num1/num2
            break
        case "%":totalSum= num1%num2 
            break
    }

    if(symbol == "+" || symbol == "-"|| symbol == "*"){
        if(totalSum%2 == 0){
            evenOdd = "even"
            console.log(`${num1} ${symbol} ${num2} = ${totalSum} - ${evenOdd} `)
        }else{
            evenOdd = "odd"
            console.log(`${num1} ${symbol} ${num2} = ${totalSum} - ${evenOdd} `)
        }

    }else if(symbol == "/"){
            if(num2 == 0){
                console.log(`Cannot divide ${num1} by zero`)
            }else{
                console.log(`${num1} ${symbol} ${num2} = ${totalSum.toFixed(2)}`)
            }
    }else{
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`)
        }else{

            console.log(`${num1} ${symbol} ${num2} = ${totalSum}`)
        }

}
}

math(["10",
"0",
"%"])
