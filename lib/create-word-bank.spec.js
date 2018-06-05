const createWordBank = require('./create-word-bank');



describe('createWordBank', function createWordBankTests() {

    it('should return a word bank from a list of words', function wordbankTest() {

        const expected = ['act', 'cat'];
        const actual = createWordBank('cactus', ['act', 'cat', 'dog', 'horse', 'gnat', 'taco']);

        expect(actual).toEqual(expected);
    });
});

