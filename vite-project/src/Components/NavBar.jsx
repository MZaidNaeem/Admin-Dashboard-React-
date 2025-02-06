import { Fragment, useContext } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdArrowDownward, MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import name from './../data/avatar.jpg';
// import { Cart, Chat, Notification, UserProfile } from "./"
import { AppContext } from "../App"

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button type="button" onClick={customFunc} style={{ color }}>{icon}</button>
        </TooltipComponent>);
}




export const NavBar = () => {
    let { activeMenu, setActiveMenu, setIsClicked, screenSize } = useContext(AppContext)

    const handleHamburgerClick = () => {
        setActiveMenu(!activeMenu);
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);

        }, 1000);
    }

    return <Fragment>
        <div className={`navbar1 flex1 ${screenSize > 400 && "navSizedStyling"}`}>
            <NavButton title={"Menu"} customFunc={() => { handleHamburgerClick() }} color="blue" icon={<AiOutlineMenu />}></NavButton>
            <div className="right_nav flex1">
                <NavButton title={"Cart"} customFunc={() => { handleClick('cart') }} color="blue" icon={<FiShoppingCart />}></NavButton>
                <NavButton title={"Chat"} customFunc={() => { handleClick('chat') }} color="#03C907" icon={<BsChatLeft />}></NavButton>
                <NavButton title={"Notification"} customFunc={() => { handleClick('notification') }} color="#03C907" icon={<RiNotification3Line />}></NavButton>
                <TooltipComponent content={"Profile"} position="BottomCenter">
                    <div className="flex1 navbarProfile" onClick={() => { handleClick('userProfile') }}>
                        <img className="profileImg" src={name} alt="" />
                        <p className="profileText">
                            <span>Hi, </span>{' '}
                            <span>Micheal</span>
                            <MdArrowDownward></MdArrowDownward>
                        </p>
                    </div>
                </TooltipComponent>
            </div>

        </div>
    </Fragment >
}