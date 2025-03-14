import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { ClipLoader } from "react-spinners";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const navStateData = useLocation();
  console.log(navStateData);

  console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <>
      <section className={classes.login}>
        <Link to="/">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.DX18DdexFcKAqj7s-jm60QHaE8&pid=Api&P=0&h=220"
            alt=""
          />
        </Link>

        <div className={classes.login_container}>
          <h1>Sign in</h1>
          {navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form action="">
            <div>
              <label htmlFor="">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              className={classes.login_signIn}
              name="signin"
            >
              {loading.signIn ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
            sale. Please see our privacy Notice, out Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            type="submit"
            onClick={authHandler}
            className={classes.logIn_register}
            name="signup"
          >
            {loading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create Your Amazon Clone Account"
            )}
          </button>
          {error && (
            <small style={{ padding: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
}

export default Auth;
