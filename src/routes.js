import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screen/home';
import Register from './screen/auth/register';
import Login from './screen/auth/login';
import NotesScreen from './screen/notes/index';
import UserEdit from './screen/users/edit';
import PrivateRoute from './components/auth/private_route';
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/notes" component={NotesScreen}/>
                <PrivateRoute exact path="/users/edit" component={UserEdit}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;