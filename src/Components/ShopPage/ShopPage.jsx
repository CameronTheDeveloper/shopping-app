import { useState, useEffect } from "react";
import ShopItemContainer from "../ShopItemContainer/ShopItemContainer"
import { getShopData } from "../get-shop-data";
import styles from "./ShopPage.module.css";

function ShopPage() {
    const [shopData, setShopData] = useState(null);
    const [shopDataLoading, setShopDataLoading] = useState(true);
    const [shopDataError, setShopDataError] = useState(null);

    useEffect(() => {
        let ignore = false;
        !ignore && getShopData(setShopData, setShopDataLoading, setShopDataError);

        return () => {
            ignore = true
        };
    }, []);

    if (shopDataLoading) return <h4>Loading shop products, please stand by...</h4>;
    if (shopDataError) return <h3>A network error ocurred while retrieving shop products</h3>;

    return (
        <>
            <ShopItemContainer shopData={shopData}></ShopItemContainer>
        </>
    );
}

export default ShopPage;