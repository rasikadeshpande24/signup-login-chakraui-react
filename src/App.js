import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/login/login.jsx";
import Signup from "./components/signup/signup.jsx";
import Welcome from "./components/welcome/welcome.jsx";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route path="/welcome" component={Welcome}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/" component={Signup}></Route>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
