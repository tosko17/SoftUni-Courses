function solve(age){

    if(age>=66){
        console.log('elder');
    }else if(age>19){
        console.log('adult');
    }else if(age>13){
        console.log('teenager');
    }else if(age>2){
        console.log('child');
    }else if(age>-1){
        console.log('baby');
    }else{
        console.log('out of bounds');
    }


}

solve(20)