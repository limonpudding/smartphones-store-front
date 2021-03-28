import React from "react";
import {Alert, Button, Col} from "reactstrap";
import {connect} from "react-redux";
import {SetBasket} from "../../redux/actions/basket";

const SmartphoneCard = (props) => {

    const addToBasket = () => {
        let actualBasket = props.basket.slice();
        actualBasket.push(props.smartphone);
        props.setBasket(actualBasket);
    }

    return (
        <Col className={'content-card'}>
            <h3>{props.smartphone.modelName}</h3>

            <p>Бренд: {props.smartphone.brand.name}</p>
            <p>Процессор: {props.smartphone.cpu}</p>
            <p>Графический процессор: {props.smartphone.gpu}</p>
            <p>Объём ОЗУ: {props.smartphone.ram}Гб</p>
            <p>Объём ПЗУ: {props.smartphone.rom}Гб</p>

            <Alert color="success">Цена: {props.smartphone.price}</Alert>
            {/*<Alert color="warning" className={"add-to-basket"} onClick={addToBasket}>Добавить в корзину</Alert>*/}
            <div className={"action-buttons"}>
                <Button onClick={addToBasket} type={"submit"}>Добавить в корзину</Button>
            </div>
        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(SmartphoneCard);