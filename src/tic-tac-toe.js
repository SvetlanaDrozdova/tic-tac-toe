const FIRST_PLAYER = 'x';
const SECOND_PLAYER = '0';
const NEXT_PLAYER = {
    [FIRST_PLAYER]: SECOND_PLAYER,
    [SECOND_PLAYER]:FIRST_PLAYER,
};
class TicTacToe {
    constructor() {
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayer = FIRST_PLAYER;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null){
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = NEXT_PLAYER[this.currentPlayer];
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        return null;
    }

    noMoreTurns() {
        return this.gameField.every(row => row.every(col => col));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][columnIndex]? this.gameField[rowIndex][columnIndex]: null;
    }
}

module.exports = TicTacToe;
