import React from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import { MineFieldGenerator } from '../../MineFieldGenerator';
import Cell from '../Cell';

export class Row extends React.Component {
    constructor(props) {
        super(props);
        this.mineFieldMatrix = new MineFieldGenerator().getMatrixWithMineNumbers();

        this.handleExplodedCell = this.handleExplodedCell.bind(this);
    }

    static propTypes = {
        emitter: PropTypes.instanceOf(EventEmitter),
        row: PropTypes.array.isRequired,
        rowIndex: PropTypes.number.isRequired,
        gameState: PropTypes.object.isRequired,
    }

    renderRow(matrixRow) {
        const { rowIndex } = this.props;
        const { isFinished, isVictory } = this.props.gameState;
        const cells = matrixRow.map((value, index) => {
            let cellKey = `${rowIndex}-${index}`;
            const isCurrentCellBomb = this.mineFieldMatrix[rowIndex][index] === '*';
            const isGameLosed = isFinished && !isVictory;
            const isCurrentCellExploded = this.exlodedCellIndex === index
                && this.explodedRowIndex === rowIndex;

            if (isCurrentCellBomb && !isCurrentCellExploded && isGameLosed) {
                cellKey = `${rowIndex + this.mineFieldMatrix.length}-${index}`;
            }

            return (
                <Cell
                    emitter={this.props.emitter}
                    onBombExplosion={this.handleExplodedCell}
                    rowIndex={rowIndex}
                    cellIndex={index}
                    isOpened={isCurrentCellBomb && isGameLosed}
                    key={cellKey} />
            );
        });

        return cells;
    }

    handleExplodedCell(cellIndex, rowIndex) {
        this.exlodedCellIndex = cellIndex;
        this.explodedRowIndex = rowIndex;
    }

    render() {
        const matrixRow = this.props.row;
        const row = this.renderRow(matrixRow);

        return (
            row
        );
    }
}
