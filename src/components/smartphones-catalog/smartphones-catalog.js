import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert} from "reactstrap";

import {selectSmartphones} from "../../redux/selectors/smartphones";

import SmartphoneCard from "../smartphone-card/smartphone-card";
import {GetSmartphones} from "../../redux/actions/smartphones";

const SmartphonesCatalog = (props) => {

    useEffect(() => {
        props.getSmartphones();
    }, []);

    return (
        <div className={'content'}>
            <Row xs={"1"}>
                {
                    props.smartphones && props.smartphones.map(smartphone => {
                        return (
                            <SmartphoneCard key={`smartphone-${smartphone.id}`} smartphone={smartphone} />
                        )
                    })
                }
            </Row>
        </div>
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