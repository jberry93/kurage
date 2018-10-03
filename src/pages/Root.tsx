import * as React from 'react';

interface RootProps {}
interface RootState {}

export class Root extends React.Component<RootProps, RootState> {
    public render(): JSX.Element {
        return (
            <h1>Welcome to the Root page!</h1>
        );
    }
}