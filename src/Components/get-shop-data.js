const getShopData = async (setShopData, setError, setLoading) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products', { mode: "cors" });
        if (!response.ok) {
            throw new Error('Network response error');
        }
        const data = await response.json();
        setShopData(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};

export { getShopData };