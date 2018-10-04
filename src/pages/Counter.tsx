import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface CounterProps extends RouteComponentProps {
    count: number;
    onIncrement: Function;
    onDecrement: Function;
};
interface CounterState {};

class CounterPage extends React.Component<CounterProps, CounterState> {
    public constructor(props: CounterProps, state: CounterState) {
        super(props);
    }

    public render(): JSX.Element {
        const {count, onIncrement, onDecrement} = this.props;
        return (
            <div className="CounterWrapper">
                <h1>Count With Redux!</h1>
                <p>{count}</p>
                <button onClick={() => onIncrement()}>+</button>
                <button onClick={() => onDecrement()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = ({counter: {count}}: {counter: {count: number}}): {count: number} => ({count});
const mapDispatchToProps = (dispatch): {onIncrement: Function, onDecrement: Function} => ({
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
})

export const Counter = withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterPage));