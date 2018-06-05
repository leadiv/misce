const createWordBank = require('./create-word-bank');
const createLetterBank = require('./create-letter-bank');



function compareSize(a, b) {

    const delta = a.length - b.length;

    return a !== b && delta / Math.abs(delta) ||
           0;
}

function compareAz(a, b) {

    return (a > b && 1) ||
           (b < a && -1) ||
           0;
}

function sizeThenAz(a, b) {

    return compareSize(a, b) ||
           compareAz(a, b) ||
           0;
}



module.exports = function createGameBoard(options) {

    const wordBank = createWordBank(options.seed, options.wordlist);

    return {
        wordBank: wordBank.slice(0).sort(sizeThenAz),
        letterBank: createLetterBank(wordBank).slice(0).sort(compareAz)
    };
}
