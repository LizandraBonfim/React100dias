import React from 'react'
import { Switch, Route } from 'react-router-dom';
import DayOne from '../pages/DayOne';
import Home from '../Home';

function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/day-one" component={DayOne} />

        </Switch>
    )
}

export default Router
