import React from "react";
import {Col, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import {SetOrders} from "../../../redux/actions/orders";

const Orders = (props) => {


    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Ваши заказы:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Номер заказа</th>
                                <th>Сумма заказа</th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.orders && props.orders.map(order => {
                                    return (
                                        <tr key={`order-${order.id}`}>
                                            <th scope="row">1</th>
                                            <td>{order.number}</td>
                                            <td>{order.fullPrice}</td>
                                            <td>{order.price}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    orders: state.orders.orders
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetOrders(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);