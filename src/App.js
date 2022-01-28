import React, { useState, Fragment } from 'react';
import { Routes, Route } from "react-router";
import LoginForm from "./components/LoginForm";
import MainContent from "./components/MainContent";
import GlobalStyles from "./globalStyles";
import Theme from "./Theme";

function App() {
  const [user, setUser] = useState({name: "", email: "", password: ""});
  const [error, setError] = useState("");

  const logUser = details => {
    console.log(details);

    if (details.email !== "" && details.password.length >= 5) {
         console.log("Logged in");
         setUser({
             name: details.name,
             email: details.email,
             password: details.password
         });
    } else if (details.password.length < 5 && details.email !== "" && details.name !== "") {
        setError("Your password is too short!");
    }
      else {
        setError("Uup, something went wrong!");
    }
  }

  console.log(error);

  const logoutUser = () => {
    setUser({name: "", email: "", password: ""});
    setError("");
  }

  return (
    <Fragment>
      <Theme>
      <GlobalStyles />
        {(user.email != "" && user.name != "" && user.password.length >= 5) ? (
            <MainContent name={user.name} logout={logoutUser} />
        ) : (
            <LoginForm login={logUser} error={error} />)}
      </Theme>
    </Fragment>
  );
}

export default App;
