import { Fragment, useContext, useEffect, useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { links } from '../data/dummy.jsx'
import { AppContext } from "../App.jsx"
import { IoCloseCircle } from "react-icons/io5";

export const SideBar = () => {

    let { setActiveMenu, screenSize } = useContext(AppContext);




    const handleLinkClick = () => {
        if (screenSize < 400) {
            setActiveMenu(false);
        }
    }


    return (
        <Fragment>
            <div className={`side_bar  ${screenSize < 400 ? "relative1" : ""} `}>

                {links.map((curElm, index1) => {
                    return <div key={index1}>
                        <h1>{curElm.title} {index1 == 0 && <span className="close_btn" onClick={() => { setActiveMenu(false) }}><IoCloseCircle /></span>}</h1>

                        <ul>
                            {curElm.links.map((obj, index2) => {
                                return (
                                    <li key={index2}>
                                        <NavLink onClick={handleLinkClick} to={`/${obj.name}`} ><span>{obj.icon}</span> {obj.name || "Ecommerce"}</NavLink>
                                    </li>);

                            })}
                        </ul>
                    </div>
                })

                }
            </div>
        </Fragment>
    );
}