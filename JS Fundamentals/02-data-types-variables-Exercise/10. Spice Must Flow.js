function solve(number){

    let dayCount = 0;
    let total = 0;

    if(number<100){
        console.log(dayCount);
        console.log(total);
    }else{
        for(let i = number; 100 <= i; i-=10){
            total += number-26;
            dayCount++;
            number-=10;
        }

        if(number<=100){
            console.log(dayCount);
            console.log(total - 26)
        }
    }
}

solve(111);
solve(450);