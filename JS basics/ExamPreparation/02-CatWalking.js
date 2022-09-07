function solve(input){

    let minWalk = Number(input[0])
    let numWalks = Number(input[1])
    let numCalo = Number(input[2]) * 0.5

    let burnCalo = minWalk * numWalks * 5

    if (burnCalo>= numCalo){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCalo}.`)
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCalo}.`)
    }
    
}

solve(["40",
"2",
"3 00"])