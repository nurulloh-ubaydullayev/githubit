import "./ProductsCarousel.scss";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";
import { useEffect } from "react";

import Splide from "@splidejs/splide";

// new Splide(".splide").mount();

function ProductsCarousel() {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 5,
      autoplay: true,
    });

    splide.mount();
  }, []);

  return (
    <>
      <section className="splide">
        <div className="splide__slider">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>

              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
              <li className="splide__slide">
                <h3 className="splide__item-heading">Collection</h3>
                <p className="splide__item-grade">Sale full Pack</p>

                <button className="splide__item-btn">Collect</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsCarousel;
