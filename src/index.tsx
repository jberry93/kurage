import * as React from 'react';
import {
    Route,
    HashRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';
import {render} from 'react-dom';
import {
    Root,
    Test,
} from './pages';

interface AppRouterProps {}

const AppRouter: React.StatelessComponent<AppRouterProps> = (): JSX.Element =>
(
    <Router>
        <div className="wrapper">
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
            <Switch>
                <Route exact path="/" component={Root}/>
                <Route path="/test" component={Test}/>
            </Switch>
        </div>
    </Router>
);

render(
    <AppRouter/>,
    document.querySelector('#app')
);