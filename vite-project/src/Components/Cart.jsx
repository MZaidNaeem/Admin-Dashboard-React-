import { Fragment, useContext } from "react"
import { AppContext } from "../App";
import { MdOutlineCancel } from 'react-icons/md';
import product1 from '../data/product9.jpg';
import product2 from '../data/product5.jpg';
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
                <div className="card flex1 flex_row " style={{ backgroundImage: `url(${product1})` }}>
                    <div className="card_right flex1 flex_column" >
                        <h2>Lolipop</h2>
                        <p>A yummy item</p>
                        <h2>$25</h2>
                    </div>
                </div>
                <div className="card flex1 flex_row" style={{ backgroundImage: `url(${product2})` }}>
                    <div className="card_right flex1 flex_column" >
                        <h2>Juice</h2>
                        <p>A type of drink</p>
                        <h2>$20</h2>
                    </div>
                </div>
                <div className="card flex1 flex_row" style={{ backgroundImage: `url(${product3})` }}>
                    <div className="card_right flex1 flex_column" >
                        <h2>Watch</h2>
                        <p>A Type of Toy</p>
                        <h2>$250</h2>
                    </div>
                </div>


            </div>
        </div>
    </Fragment>
}