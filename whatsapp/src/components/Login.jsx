import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { auth, providerGoogle } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import logo from "../images/blackClover.png";
import DeckIcon from "@material-ui/icons/Deck";

function Login({ getUser }) {
  const [{ user }, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(providerGoogle)
      .then((res) => {
        let user = res.user;
        // getUser(user);
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
// useEfffect of when auth is changed
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user signed in");
        // console.log(user);
         getUser(user);
      } else {
        console.log("user not signed in");
      }
    });
  }, [getUser]);
  return (
    <div className="login">
      <div className="login-container">
        <h1>
          <DeckIcon /> Chamber || Chats
        </h1>
        <br />
        <img src={logo} alt="logo" />
        <div className="login-text">
          <h3>Enter into the Chamber below</h3>
        </div>
        <Button size="large" onClick={signIn}>
          <i className="fab fa-google"></i>Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
