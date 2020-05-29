import React, {Component} from 'react';
import ArrowCell from "./ArrowCell";

class ArrowsContainer extends Component {
    render() {
        let container = this.props.dataProvider.map((object, index) => {
            return <div key={index}>
                <ArrowCell sign={object.sign}/>
            </div>
        });

        return (
            <div className="commonContainer mx-auto">
                {container}
            </div>
        );
    }
};
export default ArrowsContainer;