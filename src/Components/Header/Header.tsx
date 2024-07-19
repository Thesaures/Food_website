import "./Header.css";
import dish1 from "../../assets/dish1.jpg";
import dish2 from "../../assets/dish2.jpg";
import dish3 from "../../assets/dish3.jpg";
import dish4 from "../../assets/dish4.jpg";
import dish5 from "../../assets/dish5.jpg";
import dish6 from "../../assets/dish6.jpg";
const arrayFood = [
    { image: dish1, id: 1, place: "Indian" },
    { image: dish2, id: 2, place: "Chinese" },
    { image: dish3, id: 3, place: "Spanish" },
    { image: dish4, id: 4, place: "Italian" },
    { image: dish5, id: 5, place: "Korean" },
    { image: dish6, id: 6, place: "American" },
];
const Header = () => {
    return (
        <div className="differentFood">
            {arrayFood.map((item) => (
                <div
                    className="first"
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        marginInline: 10,
                    }}
                >
                    <div className="place">{item.place}</div>
                </div>
            ))}
        </div>
    );
};
export default Header;
