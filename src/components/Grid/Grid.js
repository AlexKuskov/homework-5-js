import React from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import Row from '../Row';
import { MineFieldGenerator } from '../../MineFieldGenerator';

export class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.emitter = this.props.emitter;

        this.openedCellsCounter = 0;
        this.mineField = new MineFieldGenerator();
        this.noMineCells = this.mineField.getCellsWithoutMineNumber();
        this.mineFieldMatrix = this.mineField.getMatrixWithMineNumbers();

        this.cellsOpenedListener = this.cellsOpenedListener.bind(this);
    }

    static propTypes = {
        emitter: PropTypes.instanceOf(EventEmitter),
        gameState: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.emitter.on('cellsOpened', this.cellsOpenedListener);
    }

    componentWillUnmount() {
        this.emitter.removeListener('cellsOpened', this.cellsOpenedListener);
    }

    cellsOpenedListener(cellOpenedIncrement) {
        this.openedCellsCounter += cellOpenedIncrement;

        if (this.openedCellsCounter === this.noMineCells) {
            this.emitter.emit('gameResult', true);
        }
    }

    render() {
        const { isFinished, isVictory } = this.props.gameState;
        const rows = this.mineFieldMatrix.map((row, index) => (
            <div className="row" key={index}>
                <Row
                    emitter={this.props.emitter}
                    gameState={{ isFinished, isVictory }}
                    row={row}
                    rowIndex={index} />
            </div>
        ));

        return (
            <div className={`grid ${isFinished ? 'unclickable' : ''}`}>
                { rows }
            </div>
        );
    }
}
