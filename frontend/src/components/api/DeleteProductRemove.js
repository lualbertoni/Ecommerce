import axios from 'axios';

const DeleteProductRemove = async (productID) => {
    axios
        .delete(process.env.REACT_APP_API_URL + `/api/product/remove/${productID}`)
        
        .catch((err) => {
            console.log(err);
        });
};

export default DeleteProductRemove;