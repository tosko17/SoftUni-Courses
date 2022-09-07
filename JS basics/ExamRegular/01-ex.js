function solve(input){

    let pricePerPage = Number(input[0])
    let pricePerFPage = Number(input[1])
    let discount = Number(input[2]) / 100
    let pricePerDisegner = Number(input[3])
    let priceByteam = Number(input[4])/100

    let finalPrice = ((pricePerFPage*2 + pricePerPage*899) -  (pricePerFPage*2 + pricePerPage*899)*discount + pricePerDisegner) * (1-priceByteam)

    console.log(`Avtonom should pay ${finalPrice.toFixed(2)} BGN.`)

}

solve(["0.01",
"1",
"10",
"20",
"20"])