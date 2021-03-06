import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}){
    return(
        <Route
        {...rest} render={props => (
            localStorage.getItem('user')
            ? <Component {...props}/>
            : <Redirect to={{pathname:'/login'}}/>
        )}
        />
    )
}

export default PrivateRoute;