import "./ProductTypes.scss";

// Images
import ProductTypesSettingsIcon from "../../assets/images/main/products-setting.png";
import ArrowIcon from "../../assets/images/sidebar/arrow";

function ProductTypes() {
  return (
    <article className="product-types">
      <button className="product-types__settings-btn">
        <img
          className="product-types__settings-img"
          src={ProductTypesSettingsIcon}
          alt=""
          width={20}
          height={20}
        />
      </button>

      <ul className="product-types__list">
        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />

            <p className="product-types__item-name">Pantrys</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Fruits and Vegetables</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Eggs and Dairys</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Frozens</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Beverange</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Snacks</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">Households</p>
          </label>
        </li>

        <li className="product-types__list-item">
          <label className="product-types__item-label">
            <input
              className="product-types__item-input visually-hidden"
              type="radio"
              name="product-type"
            />
            <p className="product-types__item-name">
              <span>More</span>
              <ArrowIcon />
            </p>
          </label>
        </li>
      </ul>
    </article>
  );
}
export default ProductTypes;
