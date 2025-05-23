import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import classes from "./header.module.css";
import { CiLocationOn } from "react-icons/ci";
import Lowerheader from "./Lowerheader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utility/firebase";
const Header = () => {
  const [{user, basket }, dispatch] = useContext(DataContext);
  // const [{basket}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
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
              <span>
                <CiLocationOn />
              </span>
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
            <FaSearch size={37} />
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
            <Link to={!user && "/auth"} className={classes.acc}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>sign out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, sign in</p>
                    <span>Account & list</span>s
                  </>
                )}
              </div>
            </Link>

            {/* order */}
            <Link to="/orders" className={classes.ret}>
              <p>returns</p>
              <span>& orders</span>
            </Link>

            {/* cart */}

            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <MdOutlineShoppingCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <Lowerheader />
    </section>
  );
};

export default Header;
