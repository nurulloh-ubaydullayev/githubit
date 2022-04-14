import "./main.scss";

// Components
import ControlTop from "../control-top/control-top";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import ProductTypes from "../ProductTypes/ProductTypes";
import ProductList from "../ProductsList/ProductsList";

const Main = () => {
  return (
    <section className="control">
      <ControlTop />
      <ProductsCarousel />
      <ProductTypes />
      <ProductList />
    </section>
  );
};

export default Main;
