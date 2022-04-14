import "./sidebar.scss";

// Images
import MenuIcon from "../../assets/images/sidebar/menu.svg";
import SettingsIcon from "../../assets/images/sidebar/settings.svg";
import NotificationsIcon from "../../assets/images/sidebar/notifications.svg";
import UserImg from "../../assets/images/sidebar/user.png";
import AddIcon from "../../assets/images/sidebar/wallet-add.svg";
import ShareIcon from "../../assets/images/sidebar/share.png";
import StoresIcon from "../../assets/images/sidebar/stores.js";
import OrdersIcon from "../../assets/images/sidebar/orders.js";
import SavedStores from "../../assets/images/sidebar/saved-stores.js";
import LikedProducts from "../../assets/images/sidebar/liked-products.js";
import ViwedProducts from "../../assets/images/sidebar/viwed-products.js";
import WalletIcon from "../../assets/images/sidebar/wallet.js";
import ProfileIcon from "../../assets/images/sidebar/profile.js";
import HeadphonesIcon from "../../assets/images/sidebar/headphones.svg";
import Arrow from "../../assets/images/sidebar/arrow.js";
import Logout from "../../assets/images/sidebar/logout.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <button className="sidebar__menu-btn">
          <img
            className="sidebar__menu-icon"
            src={MenuIcon}
            alt=""
            width={15}
            height={13}
          />

          <p className="sidebar__menu-logo-name">GMarket</p>
        </button>
      </div>
      <header className="sidebar__header header">
        <div className="header__profile">
          <div className="header__profile-top">
            <button className="header__profile__btn">
              <img
                className="header__profile-settings-img"
                src={SettingsIcon}
                alt=""
                width="19"
                height="20"
              />
            </button>

            <img
              className="header__profile-user-img"
              src={UserImg}
              alt=""
              width={64}
              height={64}
            />

            <button className="header__profile__btn">
              <img
                className="header__profile-settings-img"
                src={NotificationsIcon}
                alt=""
                width="20"
                height="21"
              />
            </button>
          </div>

          <div className="header__profile-info">
            <h2 className="header__profile-name">Roberto Cavanali</h2>
            <p className="header__profile-tel">(+99893) 100-00-00</p>

            <div className="header__profile-wallet">
              <div className="header__wallet-balance-box">
                <div className="header__profile-wallet-balance">
                  <p className="header__profile-wallet-title">Wallet balance</p>
                  <p className="header__profile-wallet-sum">$425,97</p>
                </div>

                <button className="header__wallet-add-btn">
                  <img src={AddIcon} alt="" width={20} height={20} />
                </button>
              </div>
              <div className="header__wallet-share">
                <img src={ShareIcon} alt="" width={20} height={20} />

                <span className="header__wallet-share-text">Share wallet</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <a
                className="header__navbar-link header__navbar-link--active"
                href="/"
              >
                <StoresIcon />

                <span className="header__navbar-link-text">Stores</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link " href="/">
                <OrdersIcon />

                <span className="header__navbar-link-text">Order history</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link " href="/">
                <SavedStores />

                <span className="header__navbar-link-text">Saved stores</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link" href="/">
                <LikedProducts />

                <span className="header__navbar-link-text">Liked products</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link" href="/">
                <ViwedProducts />

                <span className="header__navbar-link-text">Viwed Products</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link" href="/">
                <WalletIcon />

                <span className="header__navbar-link-text">Wallet history</span>
              </a>
            </li>

            <li className="header__navbar-item">
              <a className="header__navbar-link" href="/">
                <ProfileIcon />

                <span className="header__navbar-link-text">Profil setting</span>
              </a>
            </li>
          </ul>

          <div className="header__navbar-settings">
            <a className="header__navbar-settings-link" href="/">
              <img
                className="header__settings-img"
                src={HeadphonesIcon}
                alt=""
                width={24}
                height={24}
              />
              <span className="header__settings-link-text">Help center</span>

              <Arrow />
            </a>

            <a className="header__navbar-settings-link" href="/">
              <img
                className="header__settings-img"
                src={Logout}
                alt=""
                width={24}
                height={24}
              />
              <span className="header__settings-link-text">Logout</span>

              <Arrow />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Sidebar;
