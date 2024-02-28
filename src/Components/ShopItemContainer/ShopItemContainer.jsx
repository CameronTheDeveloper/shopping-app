import styles from "./ShopItemContainer.module.css";
import PropTypes from "prop-types";
import ShopItem from "../ShopItem/ShopItem";

function ShopItemContainer({shopData}) {

    return (
        <ul className={styles.shopList}>
            {shopData.map(item => (
                <li key={item.id}>
                    <ShopItem 
                    title={item.title}
                    price={item.price}
                    ></ShopItem>
                </li>
            ))}   
        </ul>
    )
}

ShopItemContainer.propTypes = {
    shopData: PropTypes.arrayOf(PropTypes.object)
}

export default ShopItemContainer;