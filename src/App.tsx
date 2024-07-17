import "./App.css";
import banana from "./assets/Banana.svg";
import apple from "./assets/Apple.svg";
import logo from "./assets/Logo.svg";
import bag from "./assets/Bag.svg";
import search from "./assets/search.svg";
import foodOne from "./assets/food1.svg";
import foodTwo from "./assets/food2.svg";
function App() {
    return (
        <div id="main-container">
            <section id="whole-contaoner">
                <div id="background-graphics"></div>
                <div id="background-graphics-right"></div>
            </section>
            <section id="total-container">
                <section id="header">
                    <section>
                        <img src={logo} alt="" id="logo-style" />
                        <span id="web-name">FitMe</span>
                    </section>
                    <section id="top-search">
                        <input
                            type="text"
                            id="item-input"
                            placeholder="Enter the item you are lokking for"
                        />
                        <img src={search} alt="" id="search-style" />
                    </section>

                    <img src={bag} alt="" id="bag-style" />
                    <button id="sign-in-button">Sign in</button>
                </section>
                <section id="text-section">
                    <section>
                        <section>
                            <div id="head-text">
                                <div>
                                    Premium{" "}
                                    <span id="head-text-orange">
                                        quality
                                        <br />
                                    </span>
                                </div>
                                <div>
                                    Food for your
                                    <img
                                        src={banana}
                                        id="banana"
                                        alt="banana"
                                    />
                                    <span id="head-text-orange">
                                        healthy
                                        <br />
                                    </span>
                                </div>
                                <div>
                                    <img src={apple} id="banana" alt="apple" />
                                    <span id="head-text-orange">& Daily </span>
                                    life
                                </div>
                            </div>
                        </section>
                        <section id="paragraph">
                            <span>
                                Discover a world of flavors with our food
                                delivery service. From <br />
                                fresh, healthy salads to indulgent gourmet
                                meals, we bring <br />a diverse menu right to
                                your doorstep.{" "}
                            </span>
                        </section>
                        <section id="input">
                            <input
                                type="text"
                                id="place-input"
                                placeholder="Enter your delivery location"
                            />
                            <button id="start-button">Get started</button>
                        </section>
                        <section id="text-underButton">
                            <span>Popular cities in india</span>
                        </section>
                        <section>
                            <span id="city"> Hyderabad</span>
                            <span id="cities"> Chennai</span>
                            <span id="city"> Banglore</span>
                            <span id="cities"> Kolkatha</span>
                            <span id="city"> Mumbai</span>
                            <span id="cities"> Delh</span>
                        </section>
                    </section>
                    <img src={foodOne} alt="" id="foodOne" />
                    <img src={foodTwo} alt="" id="foodTwo" />
                </section>
            </section>
        </div>
    );
}

export default App;
