function solve(n1,n2){

    let array=[]
    let sum=0;
for (let i=n1; n1 <= n2; n1++) {
    array.push(n1)
    
    sum+=n1;
      
}
console.log(array.join(' '))
console.log('Sum: ' + sum)

}

solve(5,10)