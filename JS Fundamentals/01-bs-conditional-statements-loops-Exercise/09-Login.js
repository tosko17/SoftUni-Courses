function solve(input){

    let username = input.shift();
    let passRev= username.split("").reverse().join("");
   
    let correct = true;
    let command;
    let count = 0;
    while ((command = input.shift()) !== passRev) {
        count++;
        if(count<4){
        console.log('Incorrect password. Try again.')
    }else{
        correct=false;
        break;
    }

}
if(correct===true){
    console.log(`User ${username} logged in.`)

}else{
    console.log(`User ${username} blocked!`);
}

}

solve(['sunny','rainy','cloudy','sunny','not sunny'])