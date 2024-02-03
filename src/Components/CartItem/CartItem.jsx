import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

function CartItem({ title, price }) {
    return (
        <div className={styles.cartItem}>
            <h1>{title}</h1>
            <h2>{`$${price} USD`}</h2>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
};

export default CartItem;