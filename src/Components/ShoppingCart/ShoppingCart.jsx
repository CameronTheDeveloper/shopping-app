import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiCartVariant } from "@mdi/js";
import styles from "./ShoppingCart.module.css";
import { formattedPrecision } from "../format-decimal-precision";

function ShoppingCart({ cartTotal = 0 }) {
    const formattedTotal = formattedPrecision(cartTotal);
    return (
        <button className={styles.cart}>
            <Icon path={mdiCartVariant}
                size={1}
                title={"Shopping Cart"}
            ></Icon>
            <div>{`$ ${formattedTotal}`}</div>
            <div>Checkout</div>
        </button>
    );
}

ShoppingCart.propTypes = {
    cartItemsCount: PropTypes.number,
};

export default ShoppingCart;