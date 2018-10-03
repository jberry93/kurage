import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface CounterProps extends RouteComponentProps {
    count: string;
    onIncrement: string;
    onDecrement: string;
};
interface CounterState {};

class CounterPage extends React.Component<CounterProps, CounterState> {
    public render(): JSX.Element {
        const {count, onIncrement, onDecrement} = this.props;
        return (
            <div className="CounterWrapper">
                <h1>Count With Redux!</h1>
                <p>{{count}}</p>
                <button onClick={() => onIncrement}>+</button>
                <button onClick={() => onDecrement}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state,
    onIncrement: state.dispatch({type: 'INCREMENT'}),
    onDecrement: state.dispatch({type: 'DECREMENT'}),    
});

const mapDispatchToProps = () => ({})

export const Counter = withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterPage));