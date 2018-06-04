const wordShape = require('./word-shape');



describe(`wordShape`, function libTests() {

    it('should be able to determine the shape of a word', function wordShapeTest() {

        const expected = 524293;
        const actual = wordShape('cat');

        expect(actual).toEqual(expected);
    });

    it('should return the same shape for words of similar shapes', function simliarShapeTest() {

        const expected = true;
        const actualToon = wordShape('Toon');
        const actualTon = wordShape('ton');

        expect(actualToon === actualTon).toEqual(expected);
    });

    it('should return NaN for invalid words', function invalidWordTest() {

        const expected = true;
        const actual = isNaN(wordShape('High School'));

        expect(actual).toEqual(expected);
    });
});
