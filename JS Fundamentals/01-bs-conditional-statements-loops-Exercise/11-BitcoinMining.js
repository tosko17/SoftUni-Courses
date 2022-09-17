function BitcoinMining(input) {


    let totalLV = 0;
    const bitcoinPrice = 11949.16;
    let bitcoinCounter = 0;
    let daysCounter = 0;
    let dayOf1stBitcoin = 0;
    let boolCheck = true;


    while (typeof (i = input.shift()) !== 'undefined') {
        daysCounter++;

        if (daysCounter % 3 === 0) {
            i *= 0.7;
        }

        totalLV += i * 67.51;

        if (totalLV >= bitcoinPrice) {
            if (boolCheck === true) {
                dayOf1stBitcoin = daysCounter;
                boolCheck = false;
            }


            while (totalLV >= bitcoinPrice) {
                bitcoinCounter++;
                totalLV -= bitcoinPrice
            }

        }
        
    }
    
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (dayOf1stBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOf1stBitcoin}`);
    }
    console.log(`Left money: ${totalLV.toFixed(2)} lv.`);

}
BitcoinMining([50, 100])