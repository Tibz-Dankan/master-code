import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../../redux/loggedInReducer";
import "./LoggedIn.css";

const LoggedIn = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.loggedIn.value);

  return (
    <Fragment>
      <div className="logged-in-wrapper">
        {isLoggedIn && (
          <div onClick={() => dispatch(logOut())}>
            <button>Log Out</button>
          </div>
        )}
        {!isLoggedIn && (
          <div onClick={() => dispatch(logIn())}>
            <button>Log In</button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LoggedIn;
