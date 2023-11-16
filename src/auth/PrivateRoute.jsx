import React, { useState } from 'react';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    let [checkState,setCheckState]=useState(true)
    return (
        checkState ? <Component /> : <Navigate to="/login"/>
    )
}
 
export default PrivateRoute;