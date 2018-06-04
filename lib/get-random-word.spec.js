const getRandomWord = require('./get-random-word');



describe('getRandomWord', function getRandomWordTests() {

    it('should return a word at random', function randomTest() {

        const expected = expect.any(String);
        const actual = getRandomWord();

        expect(actual).toEqual(expected);
    });

    it('should not return the same word twice in a row', function twoInARowTest() {

        const expected = false;
        const actual = getRandomWord() === getRandomWord();

        expect(actual).toEqual(expected);
    });
});
