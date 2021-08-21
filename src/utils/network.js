const STORE_ROOT = "https://fakestoreapi.com/";
const STORE_PRODUCTS = "products";

export const getApiResource = async () => {
    try {
        const res = await fetch(STORE_ROOT + STORE_PRODUCTS);
        if(!res.ok){
            console.error('Could not fetch, ', res.status);
            return false;
        }
        return await res.json();
    } catch (error) {
        console.error('Could not fetch, ', error.message);
        return false;
    }
};

/*
//An async function that calls to itself immediately
(async () => {
    const body = await getApiResource();
    console.log(body);
})()
*/