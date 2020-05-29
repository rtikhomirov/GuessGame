import React, {Component} from 'react';
import Board from './components/Board';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import ArrowsContainer from "./components/ArrowsContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: this.randomInteger(1, 9),
            signs: [],
            winnerIndex : -1,
            usersChoiceIndex : -1
        };

        this.availableSigns = [
            {'direction' : 'toTop', 'sign' : 'fa fa-long-arrow-up'},
            {'direction' : 'toRight', 'sign' : 'fa fa-long-arrow-right'},
            {'direction' : 'toBottom', 'sign' : 'fa fa-long-arrow-down'},
            {'direction' : 'toLeft', 'sign' : 'fa fa-long-arrow-left'},
        ];
    };

    componentDidMount() {
        this.fillArrowsSigns();
    }

    randomInteger = (min, max) => {
        let random = Math.floor(min + Math.random() * (max + 1 - min));
        return random;
    };

    fillArrowsSigns = () => {
        let index = this.state.startIndex;
        const cellsInRow = 3;
        let signs = [...this.state.signs];

        while(signs.length < 10) {
            let randomIndex = this.randomInteger(0, this.availableSigns.length - 1);
            //console.log(randomIndex + ' : ' + index);
            let randomSignObject = this.availableSigns[randomIndex];
            let randomSign = randomSignObject.direction;

            if(this.isAllowedFor(index, randomSign)){
                signs.push(randomSignObject);
                this.setState({ signs });

                //console.log('ALLOWED : ' + index + ' : ' + randomSign + ' : ' + this.state.signs.length + ' ::: ' + signs.length);
                switch (randomSign) {
                    case 'toTop':
                        index -= cellsInRow;
                        break;
                    case 'toRight':
                        index += 1;
                        break;
                    case 'toBottom':
                        index += cellsInRow;
                        break;
                    case 'toLeft':
                        index -= 1;
                        break;
                }
            }
        }
        //this.state.signs.map(object => console.log('sign : ' + object.value.direction));
    };

    isAllowedFor = (index, sign) => {
        let result = true;
        const cellsInRow = 3;

        switch(sign){
            case 'toTop':
                if(index === 1 || index === 2 || index === 3){
                    result = false;
                }
                break;
            case 'toRight':
                if(index % cellsInRow === 0){
                    result = false;
                }
                break;
            case 'toBottom':
                if(index === 7 || index === 8 || index === 9){
                    result = false;
                }
                break;
            case 'toLeft':
                if(index % cellsInRow === 1){
                    result = false;
                }
                break;
        }
        return result;
    };

    calculateWinnerIndex = () => {
        const cellsInRow = 3;
        let winnerInd = this.state.signs.reduce((previous, current) => {
            let shift = 0;
            switch (current.direction) {
                case 'toTop':
                    shift -= cellsInRow;
                    break;
                case 'toRight':
                    shift += 1;
                    break;
                case 'toBottom':
                    shift += cellsInRow;
                    break;
                case 'toLeft':
                    shift -= 1;
                    break;
            }
            return previous + shift;
        }, this.state.startIndex);

        this.setState({
            winnerIndex : winnerInd
        });
        console.log('WIN : ' + this.state.winnerIndex);
    };

    handleClick = (i) => {
        this.calculateWinnerIndex();
        this.setState({
            usersChoiceIndex : i
        });
    };

    onNextTestClick = () => {
        this.setState({
            startIndex: this.randomInteger(1, 9),
            signs: [],
            winnerIndex : -1,
            usersChoiceIndex : -1
        }, () => {
            this.fillArrowsSigns();
        });
    };

    render() {
        return (
          <div className="container-fluid" style={{padding : '10px'}}>
              <div className='row'>
                  <Board
                      onClick={(i) => this.handleClick(i)}
                      startIndex={this.state.startIndex}
                      winnerIndex={this.state.winnerIndex}
                      usersChoiceIndex={this.state.usersChoiceIndex}
                  />
              </div>
              <div className='row p-5'>
                  <ArrowsContainer
                      dataProvider={this.state.signs}
                  />
              </div>
              <div className='row'>
                  <Button className='nextButton mx-auto' onClick={() => this.onNextTestClick()}>
                      Play again
                  </Button>
              </div>
          </div>
        );
    }
}
export default App;