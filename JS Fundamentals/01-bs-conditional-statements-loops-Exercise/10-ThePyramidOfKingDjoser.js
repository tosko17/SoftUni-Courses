function solve(base, height) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let stepsCounter = 1;
   
    for (let i = base; i >= 1; i -= 2) {
      let totalBase = i - 2;
   
      
      if (totalBase > 0) {
        let calcStones = totalBase * totalBase * height; 
        stone += calcStones;
   
        // every 5th step - lapis lazuli
        if (stepsCounter % 5 === 0) {
          let calcLapis = (i * 4 - 4) * height; // lapis lazuli formula
          lapisLazuli += calcLapis;
        } else {
          let marbleFormula = (i * 4 - 4) * height; // yes, the marble formula.
          marble += marbleFormula;
        }
        stepsCounter++;
      }
      gold = i * i * height; // gold on top 
    }
    
    let calcHeight = height * stepsCounter;
   
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(calcHeight)}`);
  }
solve(11,1)