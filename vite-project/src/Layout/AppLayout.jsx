import React from "react";
import { Fragment } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { OptionalThemes } from "../Components/OptionalThemes";

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
            <SideBar></SideBar>
            <Header></Header>
            <Outlet></Outlet>
            <OptionalThemes></OptionalThemes>
            <Footer></Footer>
        </Fragment>);
    }

}