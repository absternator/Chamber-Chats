import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
// import { useStateValue } from "./StateProvider";

function App() {
  // get from data layer
  // const [{ user }] = useStateValue();
  const [user, setUser] = useState("");
  const getUser = (user) => {
    setUser(user);
    // console.log(user);
  };
  return (
    <div className="app">
      {!user ? (
        //<Login getUser={getUser} /> /
        (
          <Router>
            <Route path="/">
              <Login getUser={getUser} />
            </Route>
          </Router>
        )
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar userValue={user} />
            <Switch>
              <Route path="/chats/:chatId">
                <Chat userValue={user} />
              </Route>
              {/* This path "/" has to be at the bottom -- as it will pick it up before as "/" is used fr everthing */}
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
