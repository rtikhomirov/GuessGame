import React, {Component} from 'react';

class Square extends Component {

    render() {
        let startFlag = (this.props.isStart) ? <span className="glyphicon glyphicon-flag"></span> : null;
        let winnerSign = (this.props.index === this.props.winnerIndex) ? <span className="glyphicon glyphicon-thumbs-up text-success"></span> : null;
        let usersChoiceSign = (this.props.index === this.props.usersChoiceIndex && this.props.index !== this.props.winnerIndex) ? <span className="glyphicon glyphicon-thumbs-down text-danger"></span> : null;

        return (
            <div className='commonCell squareContainer'>
                <div className='commonCell innerContainer'>
                    <div
                        className="commonCell square"
                        onClick={() => this.props.onClick()}
                    >
                        {startFlag}
                    </div>
                    {winnerSign}
                    {usersChoiceSign}
                </div>
            </div>
        );
    }
}
export default Square;
