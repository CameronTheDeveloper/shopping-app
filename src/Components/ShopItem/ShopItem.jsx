import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";


function ShopItem({ title, price }) {
    const [amount, setAmount] = useState(0);

    const changeAmount = (value) => {
        setAmount(+value);
    };

    return (
        <div className={styles.ShopItem}>
            <h1>{title}</h1>
            <h2>{`$${price} USD`}</h2>
            <div>
                <button onClick={() => changeAmount(amount + 1)}>+</button>
                <button disabled={amount <= 0} onClick={() => changeAmount(amount - 1)}>-</button>
            </div>
            <form action="">
                <label htmlFor="itemAmount">amount</label>
                <input name="itemAmount" id="itemAmount" type="number" value={amount} onChange={(e) => changeAmount(e.target.value)}></input>
                <button type="submit">Add To Cart</button>
            </form>
        </div>
    );
}

ShopItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
};

export default ShopItem;