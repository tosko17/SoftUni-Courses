function toyShop(input){

    let priceExcursion = Number(input[0])
    let numberOfPuzzles = Number(input[1])
    let numberOfDolls = Number(input[2])
    let numberOfTeddies = Number(input[3])
    let numberOfMinions = Number(input[4])
    let numberOfTrucks = Number(input[5])

    let totalPriceToys = numberOfPuzzles*2.6+numberOfDolls*3+numberOfTeddies*4.1+numberOfMinions*8.2+numberOfTrucks*2
    let totalToys = numberOfPuzzles+numberOfDolls+numberOfTeddies+numberOfMinions+numberOfTrucks

    if (totalToys>=50){
        totalPriceToys*=0.75
    }
    totalPriceToys*=0.9

    if(totalPriceToys>=priceExcursion){
        console.log(`Yes! ${(totalPriceToys-priceExcursion).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(priceExcursion-totalPriceToys).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8","20","25","30","50","10"])