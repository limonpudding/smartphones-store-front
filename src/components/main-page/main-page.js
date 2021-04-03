import React from "react";
import {Switch, Route} from "react-router";
import {Col, Container, Row} from "reactstrap";
import Login from "../login/login";
import {BrowserRouter as Router} from "react-router-dom";
import AuthorsBar from "../top-menu/top-menu";
import SmartphonesCatalog from "../smartphones-catalog/smartphones-catalog";
import Basket from "../basket/basket";
import Orders from "../orders/orders";
import Register from "../register/register";

const MainPage = () => {

    return (
        <Container>
            <Router>
                <AuthorsBar/>
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
                </Switch>
            </Router>
        </Container>
    );
}

export default MainPage;