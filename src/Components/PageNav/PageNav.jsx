import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {

    return (
        <nav className="pageNav">
            <ol>
                <li>
                    <Link to="homepage/">Home</Link>
                </li>
                <li>
                    <Link to="shop/">Shop</Link>
                </li>
            </ol>
        </nav>
    );
}

export default PageNav;