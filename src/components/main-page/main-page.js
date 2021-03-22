import React from "react";
import {Col, Container, Row} from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";
import AuthorsBar from "../authors-bar/authors-bar";
import GenresMenu from "../genres-menu/genres-menu";
import SmartphonesCatalog from "../smartphones-catalog/smartphones-catalog";

const MainPage = () => {

    return (
        <Container>
            <Header />
            <AuthorsBar />
            <></>
            <Row>
                <Col xs="12" sm="9">
                    <Router>
                        <Switch>
                            {/*<Route path="/author/:authorId">*/}
                            {/*    <Catalog />*/}
                            {/*</Route>*/}
                            {/*<Route path="/genre/:genreId">*/}
                            {/*    <Catalog />*/}
                            {/*</Route>*/}
                            <Route path="/">
                                <SmartphonesCatalog />
                            </Route>
                        </Switch>
                    </Router>
                </Col>
                <Col xs="12" sm="3">
                    <GenresMenu />
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;