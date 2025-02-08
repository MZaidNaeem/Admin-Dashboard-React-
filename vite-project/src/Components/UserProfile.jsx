import { Fragment, useContext } from "react"
import { MdOutlineCancel } from 'react-icons/md';
import { AppContext } from "../App";
import { userProfileData } from "../data/dummy"
import name from './../data/avatar.jpg';


const OptionGetter = ({ item, index }) => {
    return (
        <div key={index} className="messages flex1 ">
            <div className="message_right">
                <div className="icon" style={{ color: item.iconColor, backgroundColor: item.iconBg }}><div className="i">{item.icon}</div></div>
            </div>
            <div className="message_left flex1 flex_column" style={{ justifyContent: "center" }}>
                <p className="message">{item.title}</p>
                <p className="desc">{item.desc}</p>
            </div>
        </div>
    );
}

export const UserProfile = () => {
    const { initialState, setInitialState } = useContext(AppContext);

    return <Fragment>
        <div className="userProfile navbardropdown flex1 flex_column" >
            <div className="chat_header flex1 space_between">
                <div className="chat_header_right flex1 ">
                    <p className="text_1">User Profile</p>
                </div>
                <button onClick={() => { setInitialState({ ...initialState, userProfileData: false }) }} className="chat_header_left"> <MdOutlineCancel /></button>
            </div>
            <div className="chat_body flex1 flex_column">
                <div key={5} className="dropdownProfile flex1 ">
                    <div className="dropdownProfile_right">
                        <img className="profileImg " src={name} alt={"profileErro"} />
                    </div>
                    <div className="dropdownProfile_left  flex1 flex_column">
                        <p className="message" style={{ fontWeight: "bolder" }}>{"Muhammad Zaid Naeem"}</p>
                        <p className="desc">{"Front End Developer"}</p>
                        <p className="time">{"officialcodexyz@gmail.com"}</p>
                    </div>
                </div>

                {userProfileData.map((item, index) => {
                    return <OptionGetter item={item} index={index}></OptionGetter>

                })}
            </div>
        </div>
    </Fragment>
}