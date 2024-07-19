import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import bag from "../../assets/Bag.svg";
import search from "../../assets/search.svg";
import "./Root.css";
const Root = () => {
    return (
        <>
            <div id="main-container">
                <section id="whole-contaoner">
                    <div className="background-graphics"></div>
                    {/* <div id="background-graphics-right"></div> */}
                </section>
                <section id="total-container">
                    <section className="header">
                        <div>
                            <img src={logo} alt="" className="logo-style" />
                            <span className="web-name">FitMe</span>
                        </div>
                        <div className="top-search-one">
                            <div className="top-search">
                                <input
                                    type="text"
                                    className="item-input"
                                    placeholder="Enter the item you are lokking for"
                                />
                                <img
                                    src={search}
                                    alt=""
                                    className="search-style"
                                />
                            </div>

                            <img src={bag} alt="" id="bag-style" />
                            <button className="sign-in-button">Sign in</button>
                        </div>
                    </section>
                    <section id="text-section">
                        <Outlet />
                    </section>
                </section>
            </div>
        </>
    );
};
export default Root;
