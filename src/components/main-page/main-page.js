import React from "react";
import {Switch, Route} from "react-router";
import {Col, Container, Row} from "reactstrap";
import Login from "../login/login";
import {BrowserRouter as Router} from "react-router-dom";
import TopMenu from "../top-menu/top-menu";
import SmartphonesCatalog from "../default/smartphones-catalog/smartphones-catalog";
import Basket from "../default/basket/basket";
import Orders from "../default/orders/orders";
import Register from "../register/register";
import ManageCatalog from "../admin/manage-catalog/manage-catalog";

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
                    <Route path="/manage-catalog">
                        <ManageCatalog/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default MainPage;