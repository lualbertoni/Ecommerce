import React, { useState, useEffect } from "react";
import getCategories from "../../api/GetCategories";
import PostProductRegistration from "../../api/PostProductRegistration";

const ProductForm = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImages, setProductImages] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "productName") {
            setProductName(value);
        } else if (name === "productPrice") {
            setProductPrice(value);
        } else if (name === "productCategory") {
            setProductCategory(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        PostProductRegistration(productName, productPrice, productCategory, productImages).then(() => {
            setProductName("");
            setProductPrice("");
            setProductCategory("");
            setProductImages("");
        });
    };

    return (
        <form className="addForm_productForm"
            onSubmit={handleSubmit}
        >
            <label className="addForm_productForm_form_div_label">
                <p>Nome do produto</p>
            </label>
            <input
                className="addForm_productForm_form_div_input"
                type="text"
                name="productName"
                value={productName}
                onChange={handleChange}
                required
            />
            <label className="addForm_productForm_form_div_label">
                <p>Preço do produto</p>
            </label>
            <input
                className="addForm_productForm_form_div_input"
                type="number"
                name="productPrice"
                value={productPrice}
                onChange={handleChange}
                required
            />

            <label className="addForm_productForm_form_div_label">
                <p>Categoria</p>
            </label>
            <select
                className="addForm_productForm_form_div_input_select"
                name="productCategory"
                value={productCategory}
                onChange={handleChange}
                required
            >
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                    <option key={category.ID} value={category.ID}>
                        {category.Name}
                    </option>
                ))}
            </select>

            {/* Adicionar imagens */}
            <label className="addForm_productForm_form_div_label">
                <p>Adicionar imagens</p>
            </label>
            <input
                className="addForm_productForm_form_div_input_file"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="productImages"
                multiple
                onChange={(e) => {
                    setProductImages(e.target.files);
                }}
            />

            <button className="addForm_productForm_button">Adicionar</button>
        </form>
    );
};

export default ProductForm;