function luncherBreak(input){

    let serie = input[0]
    let minEp = Number(input[1])
    let minBreak = Number(input[2])

    let lunchTime = minBreak/8
    let relaxTime = minBreak/4

    let timeLeft = minBreak-lunchTime-relaxTime

    if(timeLeft>=minEp){
        console.log(`You have enough time to watch ${serie} and left with ${Math.ceil(timeLeft-minEp)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${serie}, you need ${Math.ceil(minEp-timeLeft)} more minutes.`)
    }
}

luncherBreak(["Teen Wolf",

"48",

"60"])