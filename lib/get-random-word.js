const wordlist = require('wordlist-english');



module.exports = function getRandomWord() {

    const index = Math.floor(Math.random() * wordlist['english/american'].length);

    return wordlist['english/american'][index];
}
