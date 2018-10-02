import * as React from 'react';
import {render} from 'react-dom';

interface HelloProps {
    compiler: string;
    library: string;
}

const Hello = (props: HelloProps): JSX.Element => <h1>Hello from {props.compiler} and {props.library}!</h1>;

render(
    <Hello compiler="TypeScript" library="React"/>,
    document.querySelector('#app')
);