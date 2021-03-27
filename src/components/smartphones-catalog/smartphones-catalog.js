import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert, Container} from "reactstrap";

import {selectSmartphones} from "../../redux/selectors/smartphones";

import SmartphoneCard from "../smartphone-card/smartphone-card";
import {GetSmartphones} from "../../redux/actions/smartphones";
import BrandsMenu from "../brands-menu/brands-menu";

const SmartphonesCatalog = (props) => {

    useEffect(() => {
        props.getSmartphones();
    }, []);

    return (
        <Row>
            <Col xs="12" sm="9">
                <div className={'content'}>
                    <Row xs={"1"}>
                        {
                            props.smartphones && props.smartphones.map(smartphone => {
                                return (
                                    <SmartphoneCard key={`smartphone-${smartphone.id}`} smartphone={smartphone}/>
                                )
                            })
                        }
                    </Row>
                </div>
            </Col>
            <Col xs="12" sm="3">
                <div className={'right-menu'}>
                    <Row xs={"1"}>
                        <BrandsMenu/>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    smartphones: selectSmartphones(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getSmartphones: () => dispatch(new GetSmartphones())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartphonesCatalog);