import { cartItemType } from "../../Types";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { arrayAction } from "../../store";
import CardInCart from "../../Components/CardInCart/CardInCart";
const Cart = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [spinner, setSpinner] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(false);
    const [productsArray, setProductArray] = useState<number[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loaderShowing = () => {
        const showDone = () => {
            setSpinner(false);
            setDone(true);
            const navigateTo = () => {
                dispatch(arrayAction.resetCartArray());
                navigate("/Products");
            };
            setTimeout(navigateTo, 3000);
        };
        setSpinner(true);
        setTimeout(showDone, 3000);
    };
    interface CartStateType {
        cartItems: cartItemType[];
    }
    const arrayCart: cartItemType[] = useSelector(
        (state: CartStateType) => state.cartItems
    );
    const sum = productsArray.reduce((acc, item) => acc + item, 0);
    console.log("this is sum", productsArray);
    const modalVisibility = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="buyCart">
            <div className="cardsincart">
                {arrayCart.map((item, index) => (
                    <div key={index}>
                        <CardInCart
                            dishname={item.dishName}
                            price={item.price}
                            priceArray={setProductArray}
                            index={index}
                        />
                    </div>
                ))}
            </div>
            <h3>Here is the total price {sum}</h3>

            <button onClick={modalVisibility}>Buy</button>

            {showModal && (
                <div>
                    <div className="modaldiv">
                        {!spinner && !done && (
                            <div>
                                <h3>Amount :</h3>
                                <h4>{sum}</h4>
                                <button onClick={loaderShowing}>pay</button>
                            </div>
                        )}

                        {spinner && (
                            <FadeLoader
                                color="white"
                                loading={true}
                                height={20}
                                width={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        )}
                        {done && <h1>Order placed !</h1>}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Cart;
