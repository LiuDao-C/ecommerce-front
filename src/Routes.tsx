import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";
import Signin from "./components/core/Signin";
import Signup from "./components/core/Signup";


const MyRoutes = () => {
    return <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
        </Switch>
    </HashRouter>
}

export default MyRoutes