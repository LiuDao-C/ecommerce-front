import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";


const MyRoutes = () => {
    return <HashRouter>
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
        </Switch>
    </HashRouter>
}

export default MyRoutes