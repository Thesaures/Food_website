import "./Products.css";
import Card from "../../Components/Card/Card";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { cartItemType } from "../../Types";
import { useSelector, useDispatch } from "react-redux";
import { arrayAction } from "../../store";
const Products = () => {
    const arrayData = [
        {
            restoName: 1,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 2,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 3,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 4,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 5,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 6,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 7,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 8,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 9,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 10,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 11,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
        {
            restoName: 12,
            dishName: "Paneer Tikka Rice Bowl",
            price: 200,
            time: "20",
        },
    ];
    interface CartStateType {
        cartItems: cartItemType[];
    }
    const dispatch = useDispatch();
    const arrayCart: cartItemType[] = useSelector(
        (state: CartStateType) => state.cartItems
    );
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = arrayData.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(arrayData.length / recordsPerPage);
    const pages = [];
    for (let i = 1; i <= nPage; i++) {
        pages.push(i);
    }
    const navigateTo = (num: number) => {
        navigate(`/Individual/${num}`);
    };
    const navigateToCart = () => {
        navigate(`/Cart`);
    };
    const cartSetting = (cartItem: cartItemType) => {
        dispatch(arrayAction.addItem(cartItem));
    };

    const removeItem = (id: number) => {
        dispatch(arrayAction.removeItem(id));
    };
    const handlePopState = () => {
        navigate("/");
    };
    window.addEventListener("popstate", handlePopState);
    return (
        <>
            <div className="productContainer">
                <div className="contentArray">
                    <Header />
                    <div id="dataArray">
                        {records.map((item, index) => (
                            <Card
                                key={index}
                                restoName={item.restoName}
                                dishName={item.dishName}
                                price={item.price}
                                time={item.time}
                                toFunction={navigateTo}
                                cart={cartSetting}
                            />
                        ))}
                    </div>
                    <div>
                        {pages.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                {arrayCart.length !== 0 && (
                    <div className="cartContainer">
                        {arrayCart.map((item, index) => (
                            <div key={index}>
                                <div>{item.dishName}</div>

                                <button
                                    onClick={() => removeItem(item.restoName)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button onClick={navigateToCart}>Buy</button>
                    </div>
                )}
            </div>
        </>
    );
};
export default Products;
