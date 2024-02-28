import { useState, useContext } from "react";
import { formattedPrecision } from "../format-decimal-precision";
import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";
import { ShopContext } from "../../App";


function ShopItem({ title, price }) {
    const {changeCartTotal} = useContext(ShopContext);
    const [amount, setAmount] = useState(0);
    const formattedPrice = formattedPrecision(price, 2);
    const totalPriceBought = amount * price;

    const changeAmount = (value) => {
        setAmount(+value);
    };

    const handleUserInput = (e) => {
        setAmount(e.target.value)
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        changeCartTotal(totalPriceBought);
        changeAmount(0);
    }

    return (
        <div className={styles.ShopItem}>
            <h2>{title}</h2>
            <h3>{`$${formattedPrice} USD`}</h3>
            <div>
                <button onClick={() => changeAmount(amount + 1)}>+</button>
                <button disabled={amount <= 0} onClick={() => changeAmount(amount - 1)}>-</button>
            </div>
            <form action="" onSubmit={(e) => handlePurchase(e)}>
                <label htmlFor="itemAmount">amount</label>
                <input name="itemAmount" id="itemAmount" type="number" min="0" value={amount} onChange={(e) => handleUserInput(e)}></input>
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