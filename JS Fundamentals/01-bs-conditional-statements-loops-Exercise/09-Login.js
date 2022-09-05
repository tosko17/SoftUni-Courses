function solve(input){

    let username = input[0]
    let passRev= username.split("").reverse().join("");
   

    let command;
    let count = 0;
    while ((command = input.shift()) !== passRev) {
        count++;
        if(count<4){
        console.log('Incorrect password. Try again.')
    }else{
        break;
    }

}
console.log(`User ${username} logged in.`)

}

solve(['Acer','login','go','let me in','recA'])