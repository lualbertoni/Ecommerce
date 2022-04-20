import React from "react";
import AdminNavBar from "../components/admin";
import ProductSectionAdminPage from "../components/product/ProductSectionAdminPage";
import AddButton from "../components/admin/AddButton";
import('../assets/css/admin.css');

const Admin = () => {
    return (
        <div className="adminAll">
            <header>
                <AdminNavBar />
            </header>
            <section className="ProductSectionAdminPage">
                <ProductSectionAdminPage />
            </section>
            <AddButton />
        </div>
    );
};

export default Admin;