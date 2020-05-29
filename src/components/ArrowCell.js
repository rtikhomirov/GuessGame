import React, {Component} from 'react';

class ArrowCell extends Component {
    render() {
        return (
            <div className="commonCell directionCell">
                <i className={this.props.sign} aria-hidden="true"/>
            </div>
        );
    }
};
export default ArrowCell;

