import React from "react";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import {SetBasket} from "../../redux/actions/basket";

const Basket = (props) => {

    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>

                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    basket: state.basket.basket
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);