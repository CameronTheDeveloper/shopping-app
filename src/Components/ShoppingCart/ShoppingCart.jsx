import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import styles from "./ShoppingCart.module.css";

function ShoppingCart({ cartItemsCount = 0 }) {
    return (
        <button className={styles.cart}>
            <Icon path={mdiCartVariant}
                size={2}
                title={"Shopping Cart"}
            ></Icon>
            <div>{cartItemsCount}</div>
            <div>Checkout</div>
        </button>
    );
}

ShoppingCart.propTypes = {
    cartItemsCount: PropTypes.number,
};

export default ShoppingCart;