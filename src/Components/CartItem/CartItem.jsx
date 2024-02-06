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
            <div>
                <button onClick={() => setAmount(amount + 1)}>+</button>
                <button disabled={amount <= 0} onClick={() => setAmount(amount - 1)}>-</button>
            </div>
            <form action="">
                <input type="number" value={amount} onChange={changeAmount}></input>
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
};

export default CartItem;