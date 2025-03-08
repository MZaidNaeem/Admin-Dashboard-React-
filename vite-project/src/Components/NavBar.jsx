import { Fragment, useContext, useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdArrowDownward, MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import name from './../data/avatar.jpg';
// import { Cart, Chat, Notification, UserProfile } from "./"
import { AppContext } from "../App"
import { Cart } from "./Cart"
import { Chat } from "./Chat"
import { Notification } from "./Notification"
import { UserProfile } from "./UserProfile"

const NavButton = ({ title, customFunc, icon, color, dotColor, children }) => {

    let { initialState } = useContext(AppContext);

    return (
        <div className="relative1">
            <TooltipComponent content={title} position="BottomCenter">
                <button type="button" onClick={customFunc} style={{ color }}>{icon}</button>
            </TooltipComponent>
            {initialState[title] && children}
        </div>
    );
}



export const NavBar = () => {
    let { activeMenu, setActiveMenu, setIsClicked, screenSize, initialState, setInitialState } = useContext(AppContext)

    const handleHamburgerClick = () => {
        setActiveMenu(!activeMenu);
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);

        }, 1000);
    }

    const handleClick = (value) => {

        if (screenSize < 650) {
            setActiveMenu(false);

        }

        let { [value]: currentValue } = initialState;

        let myobj = {
            cart: false,
            chat: false,
            notification: false,
            userProfile: false
        }

        let newobj = { ...myobj, [value]: !currentValue };
        setInitialState(newobj);

    }

    useEffect(() => {
        console.log(initialState)
    }, [initialState])


    return <Fragment>
        <div className={`navbar1 flex1  ${screenSize > 400 && "navSizedStyling"}`}>
            <NavButton title={"Menu"} customFunc={() => { handleHamburgerClick() }} color="blue" icon={<AiOutlineMenu />}></NavButton>
            <div className="right_nav flex1">
                <NavButton title={"cart"} customFunc={() => { handleClick('cart') }} color="blue" icon={<FiShoppingCart />}>   <Cart />   </NavButton>
                <NavButton title={"chat"} customFunc={() => { handleClick('chat') }} color="#03C907" icon={<BsChatLeft />}>   <Chat />    </NavButton>
                <NavButton title={"notification"} customFunc={() => { handleClick('notification') }} color="#03C907" icon={<RiNotification3Line />}>     <Notification />   </NavButton>
                <TooltipComponent content={"Profile"} position="BottomCenter">
                    <div className="flex1 navbarProfile relative1" onClick={() => { handleClick('userProfile') }}>
                        <img className="profileImg" src={name} alt="" />
                        <p className="profileText">
                            <span>Hi, </span>{' '}
                            <span>Zaid</span>
                            <MdArrowDownward></MdArrowDownward>
                        </p>
                        {initialState.userProfile && <UserProfile />}
                    </div>
                </TooltipComponent>
            </div>

        </div>
    </Fragment >
}