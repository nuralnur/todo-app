import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    // 1. define initial state in the constractor(state.counter=0)
    // 2. update state in your function(increament counter, counter++)
    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increament = this.increament.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <button onClick={this.increament}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increament() {
        // console.log('increament');

        this.setState({
            counter : this.state.counter + 1
        });
    }
}

export default Counter;