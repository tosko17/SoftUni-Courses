function solve(n1,n2,n3){

   let n = [];
   n.push(n1,n2,n3)

   n.sort().reverse()

   for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
    
   }
}

solve(-2,1,3)