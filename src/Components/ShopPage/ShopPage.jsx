import { useState } from "react";
import { getShopData } from "../get-shop-data";
import CartItem from "../CartItem/CartItem";
import styles from "./ShopPage.module.css";

function ShopPage() {
    const [shopData, setShopData] = useState(null);
    const [shopDataLoading, setShopDataLoading] = useState(true);
    const [shopDataError, setShopDataError] = useState(false);

    if (shopDataLoading) return <h4>Loading shop products, please stand by...</h4>;
    if (shopDataError) return <h3>A network error ocurred while retrieving shop products</h3>;

    return (
        <>

        </>
    );
}

export default ShopPage;