import { useEffect, useState } from "react";
import styles from "./CardInCart.module.css";
type card = {
    dishname: string;
    price: number;
    priceArray: React.Dispatch<React.SetStateAction<number[]>>;
    index: number;
};
const CardInCart = (props: card) => {
    const { dishname, price, priceArray, index } = props;
    const [productNo, setProductNo] = useState<number>(1);
    const [productPrice, setItemPrice] = useState<number>(price);
    const numberOfProducts = (num: number) => {
        setProductNo((preValue) => {
            if (preValue === 1 && num === -1) {
                return preValue;
            }
            let newValue = preValue;
            newValue = newValue + num;
            return newValue;
        });
    };
    useEffect(() => {
        const calculatePrice = () => {
            setItemPrice((prevPrice) => {
                let newPrice = prevPrice;
                newPrice = price * productNo;
                return newPrice;
            });
            priceArray((preArray) => {
                const newArray = [...preArray];
                newArray.splice(index, 1, productPrice);
                return newArray;
            });
        };
        calculatePrice();
    }, [index, price, priceArray, productNo, productPrice]);

    return (
        <div className={styles.anonymous}>
            <div>{dishname}</div>
            <div>{productPrice}</div>
            <button onClick={() => numberOfProducts(1)}>+</button>
            <div>{productNo}</div>
            <button onClick={() => numberOfProducts(-1)}>-</button>
        </div>
    );
};
export default CardInCart;
