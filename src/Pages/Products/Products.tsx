import "./Products.css";
import Card from "../../Components/Card/Card";
// import Dish from "../../assets/food1.svg";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
const Products = () => {
    const arrayData = [
        {
            restoName: "1",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "2",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "3  ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "4",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "5 ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "6 ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "7",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "8",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "9",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "The Good ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "The Good ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
        {
            restoName: "The Good ",
            dishName: "Paneer Tikka Rice Bowl",
            price: "200",
            time: "20",
        },
    ];
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
    const navigateTo = (num: string) => {
        navigate(`/Individual/${num}`);
    };
    return (
        <>
            <div id="contentArray">
                <Header />
                <div id="dataArray">
                    {records.map((item) => (
                        <Card
                            restoName={item.restoName}
                            dishName={item.dishName}
                            price={item.price}
                            time={item.time}
                            toFunction={navigateTo}
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
        </>
    );
};
export default Products;
