function solve(input){

    let placeRental = Number(input)
    let cakePrice = 0.2*placeRental
    let drinks = 0.55*cakePrice
    let animator = placeRental/3

    let total = placeRental + cakePrice+ drinks + animator

    console.log(total)

}

solve([3720])