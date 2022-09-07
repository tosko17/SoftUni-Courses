function solve (input){

    let N = Number(input[0])
    let M = Number(input[1])
    let S = Number(input[2])

    let str =" "

    for(let i = M; i >= N; i--){
        if(i % 2 === 0 && i % 3 ===0){
            if(i === S) break;
            str +=i +" "
            
        }
        
    }
    console.log(str)

}

solve(["1",
"36",
"12"])