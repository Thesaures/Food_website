import "./Individual.css";
import { useParams } from "react-router-dom";
const Individual = () => {
    const params = useParams();
    const { num } = params;
    return <p>this is individual product page {num}</p>;
};
export default Individual;
