import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

    renderSquare = (i) => {
        return <Square
                    onClick={() => this.props.onClick(i)}
                    isStart={i === this.props.startIndex}
                    winnerIndex={this.props.winnerIndex}
                    usersChoiceIndex={this.props.usersChoiceIndex}
                    index={i}
                />;
    };

    render() {
        return (
            <div className="commonContainer mx-auto">
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}
export default Board;
