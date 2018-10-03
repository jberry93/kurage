import * as React from 'react';
import {Hello} from '../components';

interface TestProps {}
interface TestState {}

export class Test extends React.Component<TestProps, TestState> {
    public render(): JSX.Element {
        return (
            <div className="TestWrapper">
                <h1>Welcome to the Test page!</h1>
                <Hello compiler="TypeScript" library="React"/>
            </div>
        );
    }
}