function solve (input){

    let location = Number(input.shift())


    for(let i = 0; i < location; i++){
        let avrExtraction = Number(input.shift())
        let days = Number(input.shift())
        let sumExtraction = 0
        for (let j = 0; j < days; j++) {
            sumExtraction+= Number(input.shift());
            
        }

        let averge = sumExtraction / days

        if(averge>= avrExtraction){
            console.log(`Good job! Average gold per day: ${averge.toFixed(2)}.`)
        }else{
            console.log(`You need ${(avrExtraction-averge).toFixed(2)} gold.`)
        }

    }

}

solve(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])