const getShopData = (setShopData, setError, setLoading) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then(json => setShopData(json))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
};

export { getShopData };