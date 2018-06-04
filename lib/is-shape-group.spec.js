const isShapeGroup= require('./is-shape-group');



describe(`isShapeGroup`, function isShapeGroupTests() {

    it('should return true for words with exact shape', function equalShapeTest() {

        const expected = true;
        const actual = isShapeGroup('cat', 'act');

        expect(actual).toEqual(expected);
    });

    it('should return true if the two words share a common shape group', function sameGroupTest() {

        const expected = true;
        const actual = isShapeGroup('cat', 'cactus') && isShapeGroup('cactus', 'cat');

        expect(actual).toEqual(expected);
    });

    it('should return false if the two words do not share a common shape group', function differentGroupTest() {

        const expected = false;
        const actual = isShapeGroup('dog', 'spot');

        expect(actual).toEqual(expected);
    });
});

