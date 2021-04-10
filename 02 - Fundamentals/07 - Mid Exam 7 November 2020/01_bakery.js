function bakery(biscuitsPerDay, workers, biscuitsCompetitor) {
    let biscuits = 0;

    for (let i = 0; i < 30; i++) {
        biscuits += i % 3 == 0 ?
            Math.floor(biscuitsPerDay * workers * 0.75) :
            biscuitsPerDay * workers;
    }

    let moreOrLess = biscuits > biscuitsCompetitor ? 'more' : 'less';
    let percentage = moreOrLess == 'more' ?
        biscuits * 100 / biscuitsCompetitor - 100 :
        100 - biscuits * 100 / biscuitsCompetitor;
    
    console.log(`You have produced ${biscuits} biscuits for the past month.`);
    console.log(`You produce ${percentage.toFixed(2)} percent ${moreOrLess} biscuits.`);
}

bakery(78, 8, 16000);