import React, { Children } from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user } = useAuth()

    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? Children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
            }
        >

        </Route>
    );
};

export default PrivateRoute;