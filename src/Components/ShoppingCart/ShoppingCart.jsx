import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import styles from "./ShoppingCart.module.css";

function ShoppingCart({ cartItemsCount = 0 }) {
    return (
        <div tabIndex={0} className={styles.cart}>
            <Icon path={mdiCartVariant}
                size={2}
                title={"Shopping Cart"}
            ></Icon>
            <div>{cartItemsCount}</div>
        </div>
    );
}

ShoppingCart.propTypes = {
    cartItemsCount: PropTypes.number,
};

export default ShoppingCart;