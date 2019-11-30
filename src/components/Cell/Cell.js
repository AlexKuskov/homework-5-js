import React from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'events';
import Mine from '../../assets/images/mine.png';
import { MineFieldGenerator } from '../../MineFieldGenerator';

export class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: this.props.isOpened,
            isExploded: false,
        };
        this.index = this.props.cellIndex;
        this.rowIndex = this.props.rowIndex;
        this.emitter = this.props.emitter;

        this.mineField = new MineFieldGenerator();
        this.mineFieldMatrix = this.mineField.getMatrixWithMineNumbers();

        this.handleBombExplosion = this.handleBombExplosion.bind(this);
    }

    static propTypes = {
        emitter: PropTypes.instanceOf(EventEmitter),
        onBombExplosion: PropTypes.func.isRequired,
        rowIndex: PropTypes.number.isRequired,
        cellIndex: PropTypes.number.isRequired,
        isOpened: PropTypes.bool.isRequired,
    }

    renderCell(cell) {
        let cellContent = (cell || '');
        const cellClass = this.getNumberColorClass(cellContent);

        if (cell === '*') {
            cellContent = <img className="mine" src={Mine} alt="*" />;
        }

        return (
            <div className={cellClass}>
                {cellContent}
            </div>
        );
    }

    getNumberColorClass(cellContent) {
        let cellClass;

        switch (cellContent) {
            case 1:
                cellClass = 'one';
                break;
            case 2:
                cellClass = 'two';
                break;
            case 3:
                cellClass = 'three';
                break;
            case 4:
                cellClass = 'four';
                break;
            case 5:
                cellClass = 'five';
                break;
            case 6:
                cellClass = 'six';
                break;
            case 7:
                cellClass = 'seven';
                break;
            case 8:
                cellClass = 'eight';
                break;
            default:
                cellClass = '';
        }

        return cellClass;
    }

    openCell() {
        const isBomb = this.mineFieldMatrix[this.rowIndex][this.index] === '*';

        this.setState({
            isOpened: true,
        });

        if (isBomb) {
            this.setState({ isExploded: true });
            this.handleBombExplosion(this.index, this.rowIndex);
            this.emitter.emit('gameResult', false);
        } else {
            this.emitter.emit('cellsOpened', 1);
        }
    }

    handleBombExplosion(index, rowIndex) {
        this.props.onBombExplosion(index, rowIndex);
    }

    render() {
        return (
            <div className={`cell ${this.state.isExploded ? ' exploded-mine' : ''}`}>
                {
                    (!this.state.isOpened)
                        ? <button className="button" onClick={() => this.openCell()}></button>
                        : this.renderCell(this.mineFieldMatrix[this.rowIndex][this.index])
                }
            </div>
        );
    }
}
