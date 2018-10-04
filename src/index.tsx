import * as React from 'react';
import {
    Route,
    HashRouter as Router,
    Switch,
    Link,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {
    Root,
    Test,
    Counter,
} from './pages';
import {store} from './store';

interface AppInstanceProps {}

const AppInstance: React.StatelessComponent<AppInstanceProps> = (): JSX.Element =>
(
    <Provider store={store}>
        <Router>
            <div className="wrapper">
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Link to="/counter">Counter</Link>
                <Switch>
                    <Route exact path="/" component={Root}/>
                    <Route path="/test" component={Test}/>
                    <Route path="/counter" component={Counter}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);

render(
    <AppInstance/>,
    document.querySelector('#app')
);