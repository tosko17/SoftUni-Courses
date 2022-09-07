function numbersF100T200(input){
let numberToCheck = input[0]

    if(numberToCheck<100){
        console.log("Less than 100")
    }else if(numberToCheck>=100 && numberToCheck<=200){
        console.log("Between 100 and 200")
    }else{
        console.log("Greater than 200")
    }

}

numbersF100T200([201])