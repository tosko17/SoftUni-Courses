function solve (country){

    switch(country){

        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log("Spanish");
            break;
        case 'USA':
        case 'England':
            console.log("English");
            break;
        default:
            console.log("unknown");
            break;
    }


}

solve('Spain')