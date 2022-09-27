function solve(lostFights, helmetP, swordP, shieldP, armorP) {

    countBrokenHelmet = 0;
    countBrokenSword = 0;
    countBrokenShield = 0;
    countBrokenArmor = 0;
    countBrokenShield4Armor=0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            countBrokenShield++;
            countBrokenShield4Armor++;
            
        }  if (i % 2 === 0) {
            countBrokenHelmet++;
        }  if (i % 3 === 0) {
            countBrokenSword++;

        }  if (countBrokenShield4Armor > 0 && countBrokenShield % 2 === 0) {
            countBrokenArmor++;
            countBrokenShield4Armor =0 ;

        } 
    }

    let totalPrice = countBrokenHelmet * helmetP + countBrokenSword * swordP + countBrokenShield * shieldP + countBrokenArmor * armorP;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);