import "./ProductsList.scss";
import { NavLink } from "react-router-dom";

// Images
import ArrowIcon from "../../assets/images/sidebar/arrow";
import Product1Img from "../../assets/images/main/product1.png";
import Product2Img from "../../assets/images/main/product2.png";
import Product3Img from "../../assets/images/main/product3.png";
import Product4Img from "../../assets/images/main/product4.png";
import Product5Img from "../../assets/images/main/product5.png";

import ProductAdd from "../../assets/images/main/product-add.png";
import Percentage from "../../assets/images/main/percentage.png";
import Like from "../../assets/images/main/like.png";

function ProductsList() {
  return (
    <article className="products">
      <div className="products__top">
        <h3 className="products__heading">Fresh Fruit</h3>

        <NavLink className="products__link" to="/">
          <span className="products__link-text">See all</span>
          <ArrowIcon />
        </NavLink>
      </div>

      <ul className="products__list">
        <li className="products__list-item">
          <img
            className="products__item-img"
            src={Product1Img}
            alt=""
            width={131}
            height={131}
          />

          <h4 className="products__item-name">Calavo Hass Avocados</h4>

          <div className="products__item-about">
            <p className="products__item-cost">$5.99</p>

            <button className="products__item-add-btn">
              <img src={ProductAdd} alt="" width={14} height={14} />
            </button>
          </div>

          <span className="products__percentage">
            <img src={Percentage} alt="" width={20} height={20} />
          </span>

          <img
            className="products__item-like"
            src={Like}
            alt=""
            width={24}
            height={24}
          />
        </li>

        <li className="products__list-item">
          <img
            className="products__item-img"
            src={Product2Img}
            alt=""
            width={131}
            height={131}
          />

          <h4 className="products__item-name">Lemons (Large) 8</h4>

          <div className="products__item-about">
            <p className="products__item-cost">$3.89</p>

            <button className="products__item-add-btn">
              <img src={ProductAdd} alt="" width={14} height={14} />
            </button>
          </div>

          <span className="products__percentage">
            <img src={Percentage} alt="" width={20} height={20} />
          </span>

          <img
            className="products__item-like"
            src={Like}
            alt=""
            width={24}
            height={24}
          />
        </li>

        <li className="products__list-item">
          <img
            className="products__item-img"
            src={Product3Img}
            alt=""
            width={131}
            height={131}
          />

          <h4 className="products__item-name">Jumbo Cantaloupe</h4>

          <div className="products__item-about">
            <p className="products__item-cost">$10.5</p>

            <button className="products__item-add-btn">
              <img src={ProductAdd} alt="" width={14} height={14} />
            </button>
          </div>

          <span className="products__percentage">
            <img src={Percentage} alt="" width={20} height={20} />
          </span>

          <img
            className="products__item-like"
            src={Like}
            alt=""
            width={24}
            height={24}
          />
        </li>

        <li className="products__list-item">
          <img
            className="products__item-img"
            src={Product4Img}
            alt=""
            width={131}
            height={131}
          />

          <h4 className="products__item-name">Zespri Kiwifruit 2 lb</h4>

          <div className="products__item-about">
            <p className="products__item-cost">$4.90</p>

            <button className="products__item-add-btn">
              <img src={ProductAdd} alt="" width={14} height={14} />
            </button>
          </div>

          <span className="products__percentage">
            <img src={Percentage} alt="" width={20} height={20} />
          </span>

          <img
            className="products__item-like"
            src={Like}
            alt=""
            width={24}
            height={24}
          />
        </li>

        <li className="products__list-item">
          <img
            className="products__item-img"
            src={Product5Img}
            alt=""
            width={131}
            height={131}
          />

          <h4 className="products__item-name">Hass Large Avocado</h4>

          <div className="products__item-about">
            <p className="products__item-cost">$4.90</p>

            <button className="products__item-add-btn">
              <img src={ProductAdd} alt="" width={14} height={14} />
            </button>
          </div>

          <span className="products__percentage">
            <img src={Percentage} alt="" width={20} height={20} />
          </span>

          <img
            className="products__item-like"
            src={Like}
            alt=""
            width={24}
            height={24}
          />
        </li>
      </ul>
    </article>
  );
}

export default ProductsList;
