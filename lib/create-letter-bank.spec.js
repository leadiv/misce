const createLetterBank = require('./create-letter-bank');



describe('createLetterBank', function createLetterBankTests() {

    it('should return all the letters from the list of words', function letterBankTest() {

        const expected = ['a', 'c', 'c', 'o', 's', 't', 'u'];
        const actual = createLetterBank(['act', 'cat', 'taco', 'cactus']);

        expect(actual.sort()).toEqual(expected.sort());
    });
});


