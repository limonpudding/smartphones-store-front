import React from "react";
import {Button, Col, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import {SetBasket} from "../../../redux/actions/basket";

const Basket = (props) => {

    const removeFromBasket = (id) => {
        let actualBasket = props.basket.filter(smartphone => smartphone.id !== id);
        props.setBasket(actualBasket);
    }

    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Товары в вашей корзине:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Модель</th>
                                <th>Брэнд</th>
                                <th>Цена</th>
                                <th>Убрать</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.basket && props.basket.map(smartphone => {
                                    return (
                                        <tr key={`smartphone-${smartphone.id}`}>
                                            <th scope="row">1</th>
                                            <td>{smartphone.modelName}</td>
                                            <td>{smartphone.brand.name}</td>
                                            <td>{smartphone.price}</td>
                                            <td onClick={() => removeFromBasket(smartphone.id)}><strong className={'delete-icon'}>X</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        <div className={"action-buttons"}>
                            <Button>Оформить заказ</Button>
                        </div>
                    </div>
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