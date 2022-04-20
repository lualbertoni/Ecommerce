import axios from 'axios';

const PostProductRegistration = async (productName, productPrice, productCategory, productImages) => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("category", productCategory);
    for (let i = 0; i < productImages.length; i++) {
        formData.append('images', productImages[i])
    }

    axios
        .post(process.env.REACT_APP_API_URL + `/api/product/add`, formData)
        .then((res) => {
            if (res.status === 201) {
                alert("Produto criado com sucesso!")
            }
        })
        .catch((error) => {
            alert("Erro ao criar produto!");
            console.log(error);
        });
};

export default PostProductRegistration;