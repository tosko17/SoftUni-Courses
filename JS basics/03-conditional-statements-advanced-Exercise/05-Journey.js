function journey(input){

    let budget = Number(input[0])
    let season = input[1]

    let typeVac = ""
    let where = ""

    if(budget>1000){
        where="Europe"
        budget*=0.90
        typeVac="Hotel"

    }else if(budget>100){
        where="Balkans"
        switch(season){
            case "summer":
                budget*=0.40
                typeVac = "Camp"
                break;
            case "winter":
                budget*=0.80
                typeVac = "Hotel"
                break;
            default:
                break;
        }

    }else{
        where="Bulgaria"
        switch(season){
            case "summer":
                budget*=0.30
                typeVac = "Camp"
                break;
            case "winter":
                budget*=0.70
                typeVac = "Hotel"
                break;
            default:
                break;
        }

    }

    console.log(`Somewhere in ${where}`)
    console.log(`${typeVac} - ${budget.toFixed(2)}`)

}

journey(["312", "summer"])