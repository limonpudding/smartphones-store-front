import React, {useEffect} from "react";
import {
    Col,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {selectOrders} from "../../../redux/selectors/all";
import {GetOrders, UpdateOrder} from "../../../redux/actions/orders";

const ManageOrders = (props) => {

    useEffect(() => {
        props.getOrders();
    }, []);

    const submitOrder = (id) => {
        let order = props.orders.find(order => order.id === id);
        props.updateOrder(order);
    }

    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Управление заказами:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Номер заказа</th>
                                <th>Общая стоимость</th>
                                <th>Заказчик</th>
                                <th>Статус</th>
                                <th>Действие</th>
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
                                            <td>{order.userName}</td>
                                            {
                                                order.status && order.status === "PROCESSING" &&
                                                <td onClick={() => submitOrder(order.id)}>
                                                    <strong className={'edit-icon'}>Подтвердить</strong>
                                                </td>
                                            }
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
        getOrders: () => dispatch(new GetOrders()),
        updateOrder: (order) => dispatch(new UpdateOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrders);
