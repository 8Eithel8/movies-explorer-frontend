import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    const path = props.isLoggedIn ? "/movies" : "/signin"

    return (
        <Route>
            {() =>
                (props.allowed) ? <Component {...props} /> : <Redirect to={path} />
            }
        </Route>
    )
}

export default ProtectedRoute;