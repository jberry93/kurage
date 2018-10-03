import * as React from 'react';

interface HelloProps {
    compiler: string;
    library: string;
}

export const Hello: React.StatelessComponent<HelloProps> = (props: HelloProps): JSX.Element =>
(
    <h1>Hello from {props.compiler} and {props.library}!</h1>
);