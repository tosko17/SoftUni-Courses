function f15min(input){
let hour = Number(input[0])
let min = Number(input[1])+15


if(min>=60){
    hour+=1
    min-=60
}
if(hour<24){
    if(min<10){    
        console.log(`${hour}:0${min}`)
}
    else{
        console.log(`${hour}:${min}`)
    }
}else{
    hour-=24
    if(min<10){    
        console.log(`${hour}:0${min}`)
}
    else{
        console.log(`${hour}:${min}`)
    }
}
}

f15min(["23","51"])