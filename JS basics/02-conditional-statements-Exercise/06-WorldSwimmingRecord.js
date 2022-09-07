function swimmingRecord(input){
    
    let worldRecordSec = Number(input[0])
    let meters = Number(input[1])
    let sec4oneMeter = Number(input[2])

    let ivanTime = meters*sec4oneMeter 
    let totalTime = ivanTime + Math.trunc(meters/15) * 12.5

     if(worldRecordSec>totalTime){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(totalTime-worldRecordSec).toFixed(2)} seconds slower.`)
    }


}

swimmingRecord(["55555.67","3017","5.03"])