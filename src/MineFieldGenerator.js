export class MineFieldGenerator {
    mineMatrix = [
        [0, '*', 0, 0, 0, '*', 0, 0, 0, '*'],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, '*', 0, 0, 0, '*', '*', '*', 0, 0],
        [0, 0, 0, 0, 0, 0, 0, '*', 0, 0],
        [0, 0, 0, 0, '*', 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
        [0, 0, 0, 0, '*', 0, 0, 0, 0, 0],
        [0, 0, '*', 0, 0, 0, 0, '*', 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, '*', 0, 0, '*', 0, 0, 0, 0, 0],
    ];

    getMatrixWithMineNumbers() {
        this.mineMatrix = this.mineMatrix.map((row, rowIndex) => row.map((cell, cellIndex) => {
            if (cell === '*') return cell;

            return this.countMinesAround(cell, cellIndex, row, rowIndex);
        }));

        return this.mineMatrix;
    }

    getCellsWithoutMineNumber() {
        return this.mineMatrix
            .map((row) => row.filter((cell) => cell !== '*').length)
            .reduce((acc, cellsWithoutMineNumber) => acc + cellsWithoutMineNumber);
    }

    countMinesAround(cell, cellIndex, row, rowIndex) {
        const rowLastIndex = row.length - 1;
        let cellNumber = cell;

        // row above
        if (rowIndex > 0) {
            cellNumber = this.countRowMines(cellNumber, cellIndex, rowLastIndex, rowIndex - 1);
        }

        // current row
        cellNumber = this.countRowMines(cellNumber, cellIndex, rowLastIndex, rowIndex);

        // row below
        if (rowIndex < this.mineMatrix.length - 1) {
            cellNumber = this.countRowMines(cellNumber, cellIndex, rowLastIndex, rowIndex + 1);
        }

        return cellNumber;
    }

    countRowMines(cell, cellIndex, rowLastIndex, rowIndex) {
        let cellNumber = cell;

        if (cellIndex > 0) {
            if (this.isBomb(rowIndex, cellIndex - 1)) cellNumber++;
        }

        if (this.isBomb(rowIndex, cellIndex)) cellNumber++;

        if (cellIndex < rowLastIndex) {
            if (this.isBomb(rowIndex, cellIndex + 1)) cellNumber++;
        }

        return cellNumber;
    }

    isBomb(rowIndex, cellIndex) {
        return this.mineMatrix[rowIndex][cellIndex] === '*';
    }
}
