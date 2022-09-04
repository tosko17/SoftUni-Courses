function solve(n){

    totalSum=0;
    

    for (let i = 1; i <= n; i++) {
        console.log(i*2-1)
        totalSum+=i*2-1;
        
        
        
    }
    console.log("Sum: " + totalSum)

}

solve(5)