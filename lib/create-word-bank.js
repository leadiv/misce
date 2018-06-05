const isShapeGroup = require('./is-shape-group');



module.exports = function createWordBank(seedWord, wordlist) {

    const likeSeedWord = isShapeGroup.bind(this, seedWord);

    return wordlist.filter(likeSeedWord);
}
