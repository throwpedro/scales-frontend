import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'
import ScaleSelector from './components/ScaleSelector/ScaleSelector';
import Frontpage from './components/Frontpage/Frontpage';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={Frontpage} exact />
                            <Route path="/scales" component={ScaleSelector} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
