import React, { useState } from "react";
import getProducts from "../api/GetProducts";
import DeleteProductRemove from "../api/DeleteProductRemove";
import trash from "../../assets/images/trash.png";
import view from "../../assets/images/view.png";
import edit from "../../assets/images/edit.png";
import("./ProductSectionAdminPage.css");

const ProductSectionAdminPage = () => {
  const [Products, setProducts] = useState([]);

  getProducts().then((res) => {
    setProducts(res);
  });

  function handleDelete(id) {
    DeleteProductRemove(id);
    getProducts().then((res) => {
      setProducts(res);
    });
  }

  return (
    <div className="productSectionAdminPage_div">
      <table className="productSectionAdminPage_div_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => (
            <tr key={product.ID}>
              <td>{product.ID}</td>
              <td>{product.Name}</td>
              <td>{product.Price}</td>
              <td className="productSectionAdminPage_div_table_buttons_actions">
                <button>
                  <img src={view} alt="Ver" />
                </button>
                <button>
                  <img src={edit} alt="Editar" />
                </button>
                <button onClick={() => handleDelete(product.ID)}>
                  <img src={trash} alt="Apagar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSectionAdminPage;
