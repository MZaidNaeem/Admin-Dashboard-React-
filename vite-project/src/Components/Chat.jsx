import { Fragment, useContext } from "react"
import { chatData } from '../data/dummy';
import { MdOutlineCancel } from 'react-icons/md';
import { AppContext } from "../App";




export const Chat = () => {

    const { initialState, setInitialState } = useContext(AppContext);

    return <Fragment>
        <div className="chat navbardropdown flex1 flex_column" >
            <div className="chat_header flex1 space_between">
                <div className="chat_header_right flex1 ">
                    <p className="text_1">Messages</p>
                    <p className="text_2"> 5 New</p>
                </div>
                <button onClick={() => { setInitialState({ ...initialState, chat: false }) }} className="chat_header_left"> <MdOutlineCancel /></button>
            </div>
            <div className="chat_body flex1 flex_column">
                {chatData?.map((item, index) => (
                    <div key={index} className="messages flex1 ">
                        <div className="message_right">
                            <img className="message_img " src={item.image} alt={item.message} />
                        </div>
                        <div className="message_left flex1 flex_column">
                            <p className="message">{item.message}</p>
                            <p className="desc">{item.desc}</p>
                            <p className="time">{item.time}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </Fragment>
}