import React from "react";
import { Fragment } from "react";

import { useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (<Fragment>
        <h1>Errro Page</h1>
    </Fragment>);



};

export default ErrorPage;
