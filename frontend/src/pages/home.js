import ProductCard from '../components/product/ProductCard';
import HeaderSection from '../components/headerSection';
import('../assets/css/home.css');

const Home = () => {
    return (
        <div className="App">
            <HeaderSection />
            <div className="ProductCard">
                <h3>CONFIRA ALGUNS DOS NOSSOS PRODUTOS</h3>
                <ProductCard />
            </div>
        </div>
    );
};

export default Home;