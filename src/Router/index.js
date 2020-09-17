import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import DayOne from '../pages/DayOne';
import DayTwo from '../pages/DayTwo';

function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/day-one" component={DayOne} />
            <Route path="/day-two" component={DayTwo} />

        </Switch>
    )
}

export default Router
