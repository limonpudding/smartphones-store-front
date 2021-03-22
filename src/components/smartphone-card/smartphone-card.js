import React from "react";
import {Alert, Col} from "reactstrap";

const SmartphoneCard = (props) => {
    return (
        <Col>
            <h3>{props.smartphone.modelName}</h3>

            <p>
                {
                    props.smartphone.brand
                }
            </p>

            <Alert color={"success"}>{props.smartphone.price}</Alert>
        </Col>
    );
}

export default SmartphoneCard;