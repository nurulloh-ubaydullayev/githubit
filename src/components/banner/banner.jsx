import "./banner.scss";

// Images
import BannerIcon from "../../assets/images/main/banner-icon.png";
import ShopIcon from "../../assets/images/main/shop.js";
import RecipesIcon from "../../assets/images/main/recipes.js";

const Banner = () => {
  return (
    <article className="control__banner banner">
      <div className="banner-desk">
        <div className="banner-img">
          <div className="banner-img__icon">
            <img src={BannerIcon} alt="" width={52} height={52} />
          </div>
        </div>

        <div className="banner__info">
          <h2 className="banner__info-title">Wallmart store</h2>

          <ul className="banner__info-list">
            <li className="banner__info-item">
              <span className="banner__infor-dot"></span>
              <p className="banner__info-item-title">Store info</p>
            </li>

            <li className="banner__info-item">
              <span className="banner__infor-dot"></span>
              <p className="banner__info-item-title">Store delivery time</p>
            </li>

            <li className="banner__info-item">
              <span className="banner__infor-dot"></span>
              <p className="banner__info-item-title">Seved</p>
            </li>
          </ul>

          <div className="banner__rating">
            <span className="banner__rating-number">4.5</span>
          </div>
        </div>
      </div>

      <form className="banner__form">
        <label className="banner__form-radio-label">
          <input
            className="banner__form-radio visually-hidden"
            name="type"
            type="radio"
            defaultChecked
          />
          <div className="banner__radio-styled-wrapper">
            <ShopIcon />
            <p className="banner__radio-title">Shop</p>
          </div>
        </label>

        <label className="banner__form-radio-label">
          <input
            className="banner__form-radio visually-hidden"
            name="type"
            type="radio"
          />
          <div className="banner__radio-styled-wrapper">
            <RecipesIcon />
            <p className="banner__radio-title">Recipes</p>
          </div>
        </label>
      </form>
    </article>
  );
};

export default Banner;
