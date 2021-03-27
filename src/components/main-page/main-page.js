import React from "react";
import {Switch, Route} from "react-router";
import {Col, Container, Row} from "reactstrap";
import Login from "../login/login";
import {BrowserRouter as Router} from "react-router-dom";
import AuthorsBar from "../top-menu/top-menu";
import SmartphonesCatalog from "../smartphones-catalog/smartphones-catalog";
import Register from "../register/register";

const MainPage = () => {

    return (
        <Container>
            <AuthorsBar/>
            <Router>
                <Switch>
                    {/*<Route path="/author/:authorId">*/}
                    {/*    <Catalog />*/}
                    {/*</Route>*/}
                    {/*<Route path="/genre/:genreId">*/}
                    {/*    <Catalog />*/}
                    {/*</Route>*/}
                    <Route path="/catalog">
                        <SmartphonesCatalog/>
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