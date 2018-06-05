const createGameBoard = require('./create-game-board');



describe('createGameBoard', function createGameBoardTests() {

    it('should return all the letters from the list of words', function gameBoardTest() {

        const expected = {
            wordBank: [
                'act',
                'cat',
                'cot',
                'coat',
                'coast'
            ],
            letterBank: ['a', 'c', 'o', 's', 't']
        };

        const actual = createGameBoard({
            wordlist: [
                'toss',
                'cat',
                'cost',
                'coat',
                'coast',
                'dog',
                'zebra',
                'costume',
                'toast',
                'cot',
                'act'
            ],
            seed: 'taco'
        });

        expect(actual).toEqual(expected);
    });
});



