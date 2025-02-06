import React, { useContext, useEffect } from "react";
import { Fragment } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { SideBar } from "../Components/SideBar";
import { OptionalThemes } from "../Components/OptionalThemes";
import { Theme } from "../Components/Theme";
import { AppContext } from "../App";

export const AppLayout = () => {

    let { activeMenu, screenSize, isClicked, setActiveMenu } = useContext(AppContext);

    useEffect(() => {
        const handleSideBarOpening = () => {
            // console.log('screenSize:', screenSize, 'isClicked:', isClicked);
            if (screenSize < 400 && !isClicked) {
                setActiveMenu(false);
            }
            if (screenSize >= 400 && !isClicked) {
                setActiveMenu(true);
            }

        }

        handleSideBarOpening();

    }, [screenSize]);





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

            <div className="container1 flex1">
                <div className="left_col">   {activeMenu && <div><SideBar /></div>}</div>
                <div className="right_col flex_1">
                    <Header></Header>
                    <div className={`${screenSize >= 400 && "navbarScreenSize"}`}><Outlet></Outlet></div>
                </div>
            </div>
            {/* <Theme></Theme> */}
            <OptionalThemes></OptionalThemes>
            {/* <Footer></Footer> */}
        </Fragment>);
    }

}