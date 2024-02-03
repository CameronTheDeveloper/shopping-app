import PropTypes from "prop-types";
import styles from "./ShoppingCart.module.css";

function ShoppingCart({ cartItemsCount = 0 }) {
    return (
        <div>
            <div>{cartItemsCount}</div>
        </div>
    );
}

ShoppingCart.propTypes = {
    cartItemsCount: PropTypes.number,
};

export default ShoppingCart;