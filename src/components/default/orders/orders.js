import React, {useEffect} from "react";
import {Col, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import {GetOrdersByUser, SetOrders} from "../../../redux/actions/orders";
import {selectOrders} from "../../../redux/selectors/all";

const Orders = (props) => {

    useEffect(() => {
        props.getOrders();
    },[])

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
                                            <th scope="row">{order.id}</th>
                                            <td>{order.number}</td>
                                            <td>{order.fullPrice}</td>
                                            <td>{order.status}</td>
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
    orders: selectOrders(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(new GetOrdersByUser()),
        setBasket: (basket) => dispatch(new SetOrders(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);