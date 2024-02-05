import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {

    return (
        <nav className={styles.pageNav}>
            <ul>
                <li>
                    <Link to="home/">Home</Link>
                </li>
                <li>
                    <Link to="shop/">Shop</Link>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;