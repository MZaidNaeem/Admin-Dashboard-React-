import React from "react";
import { Fragment } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { OptionalThemes } from "../Components/OptionalThemes";
import { Theme } from "../Components/Theme";

export const AppLayout = () => {

    const ActiveMenu = false;

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
            {ActiveMenu ? <div>SideBar</div> : <div>!sideBar</div>}
            <Header></Header>
            <Theme></Theme>
            <Outlet></Outlet>
            <OptionalThemes></OptionalThemes>
            <Footer></Footer>
        </Fragment>);
    }

}