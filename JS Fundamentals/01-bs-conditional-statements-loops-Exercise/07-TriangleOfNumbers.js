function solve(number){

    for (let i = 1; i <= number; i++){
        let eachLine = ''
        for (let j = 1; j <= i; j++){
            eachLine += i + " "
        }
       // eachLine = eachLine.trim(); <- removes whitespace from both ends of a string and returns a new string
      console.log(eachLine);
 }

}

solve(3)