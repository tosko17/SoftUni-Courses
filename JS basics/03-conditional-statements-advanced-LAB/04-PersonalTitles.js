function personalTitles(input){
    let age = Number(input[0])
    let gender = input[1]

    if(age<16 && gender=='m'){console.log("Master") }
    else if(age>=16 && gender=='m'){console.log("Mr.") }
    else if(age>=16 && gender=='f'){console.log("Ms.") }
    else{console.log("Miss") }


}

personalTitles(['16','m'])