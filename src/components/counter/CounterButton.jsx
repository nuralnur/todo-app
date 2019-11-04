import React, {Component} from 'react';
import './Counter.css'

class CounterButton extends Component {
    // 1. define initial state in the constractor(state.counter=0)
    // 2. update state in your function(increament counter, counter++)
    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment() {
        this.setState({
            counter : this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}

export default CounterButton;