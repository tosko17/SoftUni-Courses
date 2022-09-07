function solve(input){

    let bitcoin = Number(input[0]) * 1168
    let chinaUSD = Number(input[1]) * 0.15
    let USDtoBGN = chinaUSD * 1.76

    totaltoEU = (bitcoin + USDtoBGN) / 1.95

    comision = totaltoEU - totaltoEU * (Number(input[2])/100)
    console.log(`${comision.toFixed(2)}`)


}

solve(['20','5678','2.4'])