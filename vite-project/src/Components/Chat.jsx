import { Fragment } from "react"
import { chatData } from '../data/dummy';
import Button from "./Button";
import { MdOutlineCancel } from 'react-icons/md';



export const Chat = () => {
    return <Fragment>
        <div className="chat  navbardropdown" >
            <h1>chat</h1>
            {/* <div className="">
                <div className="">
                    <p className="">Messages</p>
                    <button type="button" className="">
                        5 New
                    </button>
                </div>
                <Button
                    icon={<MdOutlineCancel />}
                    color="rgb(153, 171, 180)"
                    bgHoverColor="light-gray"
                    size="2xl"
                    borderRadius="50%"
                />
            </div>
            <div className=" ">
                {chatData?.map((item, index) => (
                    <div key={index} className="">
                        <div className="">
                            <img
                                className=""
                                src={item.image}
                                alt={item.message}
                            />
                            <span
                                style={{ background: item.dotColor }}
                                className=""
                            />
                        </div>
                        <div>
                            <p className=" ">{item.message}</p>
                            <p className="">{item.desc}</p>
                            <p className="">{item.time}</p>
                        </div>
                    </div>
                ))}
                <div className="">
                    <Button
                        color="white"
                        bgColor={"blue"}
                        text="See all messages"
                        borderRadius="10px"
                        width="full"
                    />
                </div>
            </div> */}
        </div>
    </Fragment>
}