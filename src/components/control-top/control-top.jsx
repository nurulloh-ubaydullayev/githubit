import React, { useRef, useState } from "react";
import Calendar from "react-calendar";

// Styles
import "react-calendar/dist/Calendar.css";
import "./control-top.scss";

// Images
import BackIcon from "../../assets/images/main/back.svg";
import TimerIcon from "../../assets/images/main/timer-icon.svg";
import PurseIcon from "../../assets/images/main/purse.svg";

// Components
import Banner from "../banner/banner";

const ControlTop = () => {
  const elModal = useRef(null);
  const [value, onChange] = useState(new Date());

  function handleModalClick() {
    elModal.current.classList.toggle("time-wrapper--active");
  }

  return (
    <>
      <div className="control__top">
        <div className="control__form-wrapper">
          <button className="control__back-btn">
            <img
              className="control__back-icon"
              src={BackIcon}
              alt=""
              width={24}
              height={24}
            />
          </button>

          <form className="control__form">
            <div className="control__form-select-wrapper">
              <select className="control__form-location">
                <option value="">2972 Westheimer Rd. Santa Ana</option>
                <option value="">2972 Westheimer Rd. Santa Ana</option>
                <option value="">2972 Westheimer Rd. Santa Ana</option>
              </select>
            </div>

            <label className="control__form-search">
              <input
                className="control__form-search-input"
                type="text"
                placeholder="Search products in Wallmart"
              />
            </label>

            <div className="control__form-time-box" onClick={handleModalClick}>
              <div className="control__form-time-inner">
                <img
                  className="control__form-timer-icon"
                  src={TimerIcon}
                  alt=""
                  width={20}
                  height={20}
                />
                <span className="control__form-time">By 09:00 — 23:00</span>
              </div>
            </div>

            <div className="balance__box">
              <div className="control__balance-purse-background">
                <img
                  className="control__balance-purse"
                  src={PurseIcon}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <span className="control__balance-amount">$230.80</span>
            </div>
          </form>
        </div>

        {/* Banner */}
        <Banner />
      </div>

      <div className="time-wrapper" ref={elModal}>
        <div className="time-modal">
          <div className="modal__top">
            <h3 className="modal-heading">Delivery time</h3>
            <button className="modal-exit" onClick={handleModalClick}>
              {" "}
              &#x2715;
            </button>
          </div>

          <Calendar onChange={onChange} value={value} />

          <ul className="time__list">
            <li className="time__list-item">
              <p className="time__item-date time__item-text">10 October</p>
              <p className="time__item-period time__item-text">
                8:00 AM — 9:00 AM
              </p>
            </li>

            <li className="time__list-item">
              <p className="time__item-date time__item-text">10 October</p>
              <p className="time__item-period time__item-text">
                9:00 AM — 10:00 AM
              </p>
            </li>

            <li className="time__list-item">
              <p className="time__item-date time__item-text">10 October</p>
              <p className="time__item-period time__item-text">
                10:00 AM — 11:00 AM
              </p>
            </li>

            <li className="time__list-item">
              <p className="time__item-date time__item-text">10 October</p>
              <p className="time__item-period time__item-text">
                11:00 AM — 12:00 AM
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ControlTop;
