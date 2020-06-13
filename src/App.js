import React, {useEffect} from "react";
import { Router, Switch, Route, withRouter, Redirect } from "react-router-dom";
import Main from './Main';
import Login from './Login'
import PrivateRoute from './PrivateRoute';
import store from './store';
import { loadUser } from './actions/auth';

function App(location){
    useEffect(() => {
        store.dispatch(loadUser());
    });

    const loggedIn = true;
    return(
        <Switch>
            <PrivateRoute path="/dashboard" component={Main} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/dashboard"/>
        </Switch>
    );
}

export default withRouter(App);