import React from "react";
import { Fragment } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";

export const AppLayout = () => {

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        );
    }
    else {

        return (<Fragment>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Fragment>);
    }

}