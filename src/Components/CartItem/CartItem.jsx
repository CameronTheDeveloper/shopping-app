import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";


function CartItem({ title, price }) {
    const [amount, setAmount] = useState(0);

    const changeAmount = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div className={styles.cartItem}>
            <h1>{title}</h1>
            <h2>{`$${price} USD`}</h2>
            <input type="number" value={amount} onChange={changeAmount}></input>
            <button>Add To Cart</button>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
};

export default CartItem;