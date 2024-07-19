import { useState } from "react";
import Dish from "../../assets/dish1.jpg";
import Price from "../../assets/price.svg";
import Time from "../../assets/time.svg";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { cartItemType } from "../../Types";
type card_type = {
    restoName: number;
    dishName: string;
    price: number;
    time: string;
    toFunction: (num: number) => void;
    cart: (cartItem: cartItemType) => void;
};
const Card = (props: card_type) => {
    const navigate = useNavigate();
    const { restoName, dishName, price, time, toFunction, cart } = props;
    const [show, setShow] = useState(false);
    const navigateTo = () => {
        navigate("/Buy");
    };
    const mouseEntering = () => {
        setShow(true);
    };
    const mouseLeaving = () => {
        setShow(false);
    };

    return (
        <div
            className="containerCard"
            onMouseEnter={mouseEntering}
            onMouseLeave={mouseLeaving}
        >
            <div className="down">
                {show && (
                    <div className="dropdownCard ">
                        <button className="buy" onClick={navigateTo}>
                            Buy
                        </button>
                        <button
                            className="buy"
                            onClick={() =>
                                cart({ restoName, dishName, price, time })
                            }
                        >
                            Cart
                        </button>
                    </div>
                )}
            </div>

            <div className="card" onClick={() => toFunction(restoName)}>
                <img src={Dish} alt="" id="image" />
                <section id="data">
                    <div id="dishName">{dishName}</div>
                    <div id="restoName">{restoName}</div>
                    <div id="price">
                        <div id="price">
                            <img src={Price} alt="" />
                            <section id="textStyle">{price}</section>
                        </div>
                        <div id="price">
                            <img src={Time} alt="" />
                            <section id="textStyle">{time} Mins</section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Card;
