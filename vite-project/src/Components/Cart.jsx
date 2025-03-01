import { Fragment, useContext } from "react"
import { AppContext } from "../App";
import { MdOutlineCancel } from 'react-icons/md';
import product1 from '../data/product1.jpg';
import product2 from '../data/product2.jpg';
import product3 from '../data/product3.jpg';


export const Cart = () => {
    const { initialState, setInitialState } = useContext(AppContext);

    return <Fragment>
        <div className="cart flex1 flex_column">
            <div className="cart_header flex1 space_between">
                <h1>Cart</h1>
                <button onClick={() => { setInitialState({ ...initialState, cart: false }) }} className="chat_header_left"> <MdOutlineCancel /></button>
            </div>
            <div className="cart_body flex1 flex_column">
                <div className="card flex1 flex_row">
                    <div className="card_left"><img src={product1} /></div>
                    <div className="card_right flex1 flex-column" >
                        <h2>Toy Car</h2>
                        <p>A Type of Toy</p>
                        <h2>$250</h2>
                    </div>
                </div>
                <div className="card flex1 flex_row">
                    <div className="card_left"><img src={product2} /></div>
                    <div className="card_right flex1 flex-column" >
                        <h2>Glasses</h2>
                        <p>A Type of daily used item</p>
                        <h2>$200</h2>
                    </div>
                </div>
                <div className="card flex1 flex_row">
                    <div className="card_left"><img src={product3} /></div>
                    <div className="card_right flex1 flex-column" >
                        <h2>Watch</h2>
                        <p>A Type of Toy</p>
                        <h2>$250</h2>
                    </div>
                </div>


            </div>
        </div>
    </Fragment>
}