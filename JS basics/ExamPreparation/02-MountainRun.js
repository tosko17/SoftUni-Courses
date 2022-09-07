function solve (input){

    let record = Number(input[0])
    let distance = Number(input[1])
    let timeInSecondsFor1m  = Number(input[2])

    let slow = Math.floor(distance/50) * 30
    let total = distance * timeInSecondsFor1m + slow
    
    if(total<record){
        console.log(`Yes! The new record is ${total.toFixed(2)} seconds.`)
    }else{
        console.log(`No! He was ${(total-record).toFixed(2)} seconds slower.`)
    }

}

solve(["5554.36",
"1340",
"3.23"])