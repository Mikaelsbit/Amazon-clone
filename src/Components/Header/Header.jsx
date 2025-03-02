import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.Header_container}>
          <div className={classes.header_left}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </a>
            <div className={classes.delivery}>
              <span><CiLocationOn /></span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className="header_middle">
            {/* search Bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search Product" />
            <FaSearch />
          </div>

          <div className="header_right">
            <div>
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            {/* three components */}
            <a href="">
              <p>sign in</p>
              <span>Account & list</span>
            </a>

            {/* order */}
            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>

            {/* cart */}

            <a href="">
              {/* icon */}
              <MdOutlineShoppingCart />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
