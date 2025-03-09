import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
import Lowerheader from "./Lowerheader"
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () => {

  const [{basket} , dispatch] = useContext (DataContext)
  console.log(basket.length)
  return (
    <>
      <section>
        <div className={classes.Header_container}>
          <div className={classes.header_left}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to="/auth" className={classes.acc}>
              <p>Hello, sign in</p>
              <span>Account & list</span>
            </Link>

            {/* order */}
            <Link to="/orders" className={classes.ret}>
              <p>returns</p>
              <span>& orders</span>
            </Link>

            {/* cart */}

            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <MdOutlineShoppingCart size ={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      < Lowerheader />
    </>
  );
};

export default Header;
