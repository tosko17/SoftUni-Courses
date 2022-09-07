function solve(input){

    let mouth = input[0]
    let numNig = Number(input[1])

    let studio = 0
    let apartment = 0

    if(mouth=="May" || mouth=="October"){
        studio= numNig*50
        apartment= numNig*65

        if(numNig>14){studio*=0.70}
        else if(numNig>7){studio*=0.95}
        if(numNig>14){apartment*=0.90}

    }else if(mouth=="June" || mouth=="September"){
        studio= numNig*75.20
        apartment= numNig*68.70

        if(numNig>14){studio*=0.80}
        if(numNig>14){apartment*=0.90}
    }else{
        studio= numNig*76
        apartment= numNig*77

        if(numNig>14){apartment*=0.90}
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}

solve(["May",
"15"])
