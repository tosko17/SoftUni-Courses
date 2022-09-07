function movie(input){
    let budgetMovie = Number(input[0])
    let numberExtras = Number(input[1])
    let price4oneExtra = Number(input[2])

    let set4Movie = budgetMovie*0.1
    let totalPriceClo = numberExtras*price4oneExtra

    if (numberExtras>150){
        totalPriceClo*=0.9
    }

    let expenses = set4Movie+totalPriceClo 
    
    if(budgetMovie>=expenses){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budgetMovie-expenses).toFixed(2)} leva left.`)
    }else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(expenses-budgetMovie).toFixed(2)} leva more.`)
    }

}

movie(["9587.88",

"222",

"55.68"])