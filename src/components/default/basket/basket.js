import React, {useState} from "react";
import {Button, Col, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import {SetBasket} from "../../../redux/actions/basket";
import {selectBasket, selectUserDetail} from "../../../redux/selectors/all";
import {Redirect} from "react-router";
import {AddOrder} from "../../../redux/actions/orders";
import MessageBox from "../../util/message-box";

const Basket = (props) => {

    // TODO очистить корзину после создания заказа

    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const toggleErrorDialog = () => setShowErrorDialog(!showErrorDialog);
    const [errorDialogData, setErrorDialogData] = useState({
        title: '',
        message: '',
    });

    const [orderCompleted, setOrderCompleted] = useState(false);

    const removeFromBasket = (id) => {
        let actualBasket = props.basket.filter(smartphone => smartphone.id !== id);
        props.setBasket(actualBasket);
    }


    const createOrder = () => {
        if (!props.userDetail) {
            setErrorDialogData({
                title: 'Ошибка',
                message: 'Упс, кажется, вы не авторизованы!',
            })
            toggleErrorDialog();
        }
        if (props.basket.length === 0) {
            setErrorDialogData({
                title: 'Ошибка',
                message: 'Корзина пуста! Чтобы оформить заказ, необходимо добавить в корзину хотя бы 1 товар.',
            })
            toggleErrorDialog();
        }
        let order = {
            smartphones: props.basket,
            userName: props.userDetail.userName
        };
        props.addOrder(order);
        props.setBasket([]);
        setOrderCompleted(true);
    }

    return (
        orderCompleted ? <Redirect to={"/orders"}/> :
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
                            <Button onClick={createOrder}>Оформить заказ</Button>
                        </div>
                    </div>
                </div>
                {
                    showErrorDialog ? <MessageBox errorDialogData={errorDialogData} toggle={toggleErrorDialog} /> : null
                }
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    basket: selectBasket(state),
    userDetail: selectUserDetail(state)
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetBasket(basket)),
        addOrder: (order) => dispatch(new AddOrder(order)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);