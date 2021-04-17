import React from "react";
import {Switch, Route} from "react-router";
import {Container} from "reactstrap";
import Login from "../login/login";
import {BrowserRouter as Router} from "react-router-dom";
import TopMenu from "./top-menu";
import SmartphonesCatalog from "../default/smartphones-catalog/smartphones-catalog";
import Basket from "../default/basket/basket";
import Orders from "../default/orders/orders";
import Register from "../login/register";
import ManageCatalog from "../admin/manage-catalog/manage-catalog";
import ManageBrands from "../admin/manage-brands/manage-brands";
import ManageUsers from "../admin/manage-users/manage-users";
import ManageOrders from "../admin/manage-orders/manage-orders";

const MainPage = () => {

    return (
        <Container>
            <Router>
                <TopMenu/>
                <div className={"under-header"}>
                    <Switch>
                        <Route path="/catalog" exact>
                            <SmartphonesCatalog/>
                        </Route>
                        <Route path="/catalog/:brandId">
                            <SmartphonesCatalog/>
                        </Route>
                        <Route path="/basket">
                            <Basket/>
                        </Route>
                        <Route path="/orders">
                            <Orders/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/manage-orders">
                            <ManageOrders/>
                        </Route>
                        <Route path="/manage-catalog">
                            <ManageCatalog/>
                        </Route>
                        <Route path="/manage-brands">
                            <ManageBrands/>
                        </Route>
                        <Route path="/manage-users">
                            <ManageUsers/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default MainPage;