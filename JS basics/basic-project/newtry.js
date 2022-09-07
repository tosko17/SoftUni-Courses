function fruitShop(input){
    var workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    var weekEnd = ["Saturday", "Sunday"]
    var fruit = {
        "banana": [2.5, 2.7],
        "apple": [1.20, 1.25],
        "orange": [0.85, 0.90],
        "grapefruit": [1.45, 1.60],
        "kiwi": [2.70, 3],
        "pineapple": [5.50, 5.6],
        "grapes": [3.85,4.20]
    }
    if (weekEnd.includes(input[1])){i=1} 
    if (workDays.includes(input[1])){i=0}

    if (input[0] in fruit && (workDays.includes(input[1]) || weekEnd.includes(input[1]))){
        let sum = fruit[input[0]][i] * Number(input[2])
        console.log(sum.toFixed(2))
    }else {console.log("error")}}

    fruitShop(["orange","Saturday",2])