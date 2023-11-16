import React from 'react';
import { Navigate } from 'react-router-dom';
// import { getToken } from 'utils/utils';

const PublicRoute = ({ component: Component }) => {
    let states = true
    return (
        states ? <Component /> : <Navigate to="/" />
    )
}

export default PublicRoute;