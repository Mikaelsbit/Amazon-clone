import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
import Lowerheader from "./Lowerheader"
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
          <div className={classes.header_middle}>
            {/* search Bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search Product" />
            <FaSearch size={25} />
          </div>

          <div className={classes.header_right}>
            <a href="" className={classes.language}>
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <a href="" className={classes.acc}>
              <p>Hello, sign in</p>
              <span>Account & list</span>
            </a>

            {/* order */}
            <a href="" className={classes.ret}>
              <p>returns</p>
              <span>& orders</span>
            </a>

            {/* cart */}

            <a href="" className={classes.cart}>
              {/* icon */}
              <MdOutlineShoppingCart size ={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      < Lowerheader />
    </>
  );
};

export default Header;
