import "./Home.css";
import banana from "../../assets/Banana.svg";
import apple from "../../assets/Apple.svg";
import foodOne from "../../assets/food1.svg";
import foodTwo from "../../assets/food2.svg";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/Products");
    };
    return (
        <section className="main-page">
            <section className="text-section">
                <section className="first-container">
                    <section>
                        <div className="head-text">
                            <div>
                                Premium{" "}
                                <span id="head-text-orange">
                                    quality
                                    <br />
                                </span>
                            </div>
                            <div>
                                Food for your
                                <img src={banana} id="banana" alt="banana" />
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
                    <section className="paragraph">
                        <span>
                            Discover a world of flavors with our food delivery
                            service. From <br />
                            fresh, healthy salads to indulgent gourmet meals, we
                            bring <br />a diverse menu right to your doorstep.{" "}
                        </span>
                    </section>
                    <section id="input">
                        <input
                            type="text"
                            className="place-input"
                            placeholder="Enter your delivery location"
                        />
                        <button className="start-button">Get started</button>
                    </section>
                    <section className="text-underButton">
                        <span>Popular cities in india</span>
                    </section>
                    <section className="list-of-cities">
                        <span id="city"> Hyderabad</span>
                        <span id="cities"> Chennai</span>
                        <span id="city"> Banglore</span>
                        <span id="cities"> Kolkatha</span>
                        <span id="city"> Mumbai</span>
                        <span id="cities"> Delhi</span>
                    </section>
                </section>
                <div className="images">
                    <img src={foodOne} alt="" className="foodOne" />
                    <img src={foodTwo} alt="" className="foodTwo" />
                </div>
            </section>
            <button onClick={handleNavigation} className="bottomButton">
                Go to products
            </button>
        </section>
    );
}

export default Home;
