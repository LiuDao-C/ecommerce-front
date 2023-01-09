import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom"
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminRoute from "./components/admin/AdminRoute";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoute from "./components/admin/PrivateRoute";
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
            <PrivateRoute path="/user/dashboard" component={Dashboard}></PrivateRoute>
            <AdminRoute path="/admin/dashboard" component={AdminDashboard}></AdminRoute>
        </Switch>
    </HashRouter>
}

export default MyRoutes