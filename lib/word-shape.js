const alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
];

function getAlphabetIndex(letter) {

    const index = alphabet.indexOf(letter);

    return index === -1 ? NaN : index;
}

function collectShape(shape, letter) {


    return shape + Math.pow(2, getAlphabetIndex(letter));
}

function unique(v, i, a) {

    return a.indexOf(v) === i;
}



module.exports = function wordShape(word) {

    return word.toLowerCase().split('').filter(unique).reduce(collectShape, 0);
}
