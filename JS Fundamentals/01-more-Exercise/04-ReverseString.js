function solve(str){

    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

   // return str.split("").reverse().join("");  <- On the same line code.

    return joinArray;
}

solve("Hello")