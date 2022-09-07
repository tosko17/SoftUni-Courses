function solve(input){
 let numProsecosrs = Number(input[0])
 let numEmplo = Number(input[1])
 let DaysOfWork = Number(input[2])

 let calc = Math.floor((numEmplo * DaysOfWork * 8) / 3)
 let totalSUm = 0

 if (calc>=numProsecosrs){
    totalSUm = (calc-numProsecosrs) *110.10
    console.log(`Profit: -> ${totalSUm.toFixed(2)} BGN`)
 }else{
    totalSUm = (numProsecosrs-calc) *110.10
    console.log(`Losses: -> ${totalSUm.toFixed(2)} BGN`)
 }

}

solve(["500",
"8",
"20"])