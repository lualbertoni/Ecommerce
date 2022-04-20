import React, { useState } from "react";
import getProducts from "../api/GetProducts";
import("./ProductCard.css");

const ProductCard = () => {
  const [Products, setProducts] = useState([]);

  getProducts().then((data) => {
    setProducts(data);
  });

  return (
    <div className="all_productCard">
      {Products.map((item, index) => {
        if (index < 4) {
          return (
            <div key={index} id="productCard_div">
              <img
                src={
                  process.env.REACT_APP_API_URL +
                  `/uploads/products/${item.ID}/${item.Images[0]}`
                }
                alt={item.Name}
              />

              <div className="productCard_div_infos">
                <h3>{item.Name}</h3>
                <ul>
                  <li>
                    <strong>Preço: </strong>
                    {item.Price}
                  </li>
                  <li>
                    <strong>Categoria: </strong>
                    Categoria
                  </li>
                </ul>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ProductCard;
