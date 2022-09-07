function fishingboat(input){

    let budget = Number(input[0])
    let season = input[1]
    let numFishers = Number(input[2])

    let cost = 0;
    switch(season){
        case "Spring":
            cost = 3000;
            break;
        case "Summer":
        case "Autumn":
            cost = 4200;
            break;
        case "Winter":
            cost = 2600;
            break;
        default:
            break;
    }

    if(numFishers>11){
        cost*=0.75
    }else if(numFishers>6){
        cost*=0.85
    }else{
        cost*=0.9
    }

    if(numFishers%2 == 0 && season !=="Autumn"){
        cost*=0.95
    }

    if(budget>=cost){

        console.log(`Yes! You have ${(budget-cost).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${(cost-budget).toFixed(2)} leva.`)
    }


}

fishingboat(["3600",
"Autumn",
"6"])
