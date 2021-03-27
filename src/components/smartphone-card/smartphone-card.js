import React from "react";
import {Alert, Col} from "reactstrap";

const SmartphoneCard = (props) => {
    return (
        <Col className={'content-card'}>
            <h3>{props.smartphone.modelName}</h3>

            <p>
                {
                    props.smartphone.brand
                }
            </p>

            <Alert color={"success"}>Цена: {props.smartphone.price}</Alert>
        </Col>
    );
}

export default SmartphoneCard;