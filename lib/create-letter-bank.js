function createLetterStats(stats, letter) {

    return Object.assign({}, stats, {
        [letter]: [...(stats[letter] || []), letter]
    });
}

function getLetterStats(word) {

    return word.toLowerCase().split('').reduce(createLetterStats, {});
}

function combineStatWith(stat, combined, letter) {

    return (combined[letter] || []).length >= stat[letter].length ?
        combined :
        Object.assign({}, combined, {
            [letter]: stat[letter]
        });
}

function mergeStats(stat1, stat2) {

    const combineWithStat2 = combineStatWith.bind(this, stat2);

    return Object.keys(stat2).reduce(combineWithStat2, stat1);
}

function flattenProp(stat, letterList, letter) {

    return [...letterList, ...stat[letter]];
}

function statIntoArray(stat) {

    const statIntoArray = flattenProp.bind(this, stat);

    return Object.keys(stat).reduce(statIntoArray, []);
}

function turnIntoStats(allStats, word) {

    return mergeStats(allStats, getLetterStats(word));
}



module.exports = function createLetterBank(wordlist) {

    return statIntoArray(wordlist.reduce(turnIntoStats, {}));
}
