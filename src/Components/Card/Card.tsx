import Dish from "../../assets/dish1.jpg";
import Price from "../../assets/price.svg";
import Time from "../../assets/time.svg";
import "./Card.css";
type card_type = {
    restoName: string;
    dishName: string;
    price: string;
    time: string;
    toFunction: (num: string) => void;
};
const Card = (props: card_type) => {
    const { restoName, dishName, price, time, toFunction } = props;
    return (
        <div id="card" onClick={() => toFunction(restoName)}>
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
    );
};
export default Card;
