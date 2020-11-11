import React from 'react';
import './App.css';
import { DetailProps, DetailState} from './types'

class Detail extends React.Component<DetailProps, DetailState> {
    constructor(props:DetailProps){
        super(props);
        this.state={
            numOfPeople: props.classification.numOfPeople,
        }
    }

    onNumOfPeopleChange(e: React.ChangeEvent<HTMLSelectElement>):void{
        const num: number = Number(e.target.value);
        this.setState({
            numOfPeople: num,
        });
    }

    render() {
        return (
            <div >
                <div className="classification-name">{this.props.classification.name}</div>
                <div className="description">{this.props.classification.description}</div>
                <div className="unit-price">{this.props.classification.unitPrice}円</div>
                <div className="num-people">
                    <select value={this.props.classification.numOfPeople}
                        onChange = {e => this.onNumOfPeopleChange(e)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <span>名</span>
                </div>
            </div>
        );
    }
}


export default Detail;