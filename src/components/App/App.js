import React from 'react';
import './App.css';
import EventEmitter from 'events';
import Grid from '../Grid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            isFinished: false,
            isVictory: false,
        };
        this.emitter = new EventEmitter();
    }

    componentDidMount() {
        this.emitter.on('gameResult', (result) => {
            this.setState({
                isFinished: true,
                isVictory: result,
            });
        });
    }

    startGame() {
        this.setState({ isStarted: true });
    }

    resetGame() {
        this.setState({ isStarted: !this.state.isStarted, isFinished: false }, () => {
            this.setState({ isStarted: !this.state.isStarted });
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Minesweeper</h1>
                <button
                    className="game-button"
                    onClick={() => (this.state.isStarted ? this.resetGame() : this.startGame())}>
                    {(this.state.isStarted) ? 'Reset' : 'Start'}
                </button>

                <p className={`finish-text ${this.state.isVictory ? 'victory-text' : 'game-over-text'}`}
                    hidden={!this.state.isFinished} >
                    {this.state.isVictory ? 'Victory!' : 'Game Over :('}
                </p>

                {this.state.isStarted && <Grid emitter={this.emitter} gameState={this.state} />}
            </div>
        );
    }
}

export default App;
