import axios from 'axios';

const getProducts = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + `/api/category/list`);
    return res.data;
};

export default getProducts;