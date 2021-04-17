import React, {useEffect, useState} from 'react';
import {
    Button, Col, FormGroup,
    Input, Label
} from "reactstrap";
import {selectRoles} from "../../../redux/selectors/all";
import {connect} from "react-redux";
import {UpdateUser} from "../../../redux/actions/users";

const ManageUser = (props) => {

    useEffect(() => {
        if (props.user) {
            setItem(Object.assign({}, props.user));
        } else {
            props.toggle();
        }
    }, []);

    const [item, setItem] = useState({
        id: '',
        userName: '',
        password: '',
        userRole: ''
    });

    const handleClick = () => {
        props.toggle();
    };

    const save = () => {
        props.updateUser(item);
        props.toggle();
    }


    return (
        <div className="ts-modal">
            <div className="ts-modal-content">

                <h4>Редактирование пользователя:</h4>
                <FormGroup row>
                    <Label for="userName" sm={3}>Имя пользователя</Label>
                    <Col sm={9}>
                        <Input id="userName" type={"text"} placeholder="Имя пользователя" onChange={event => item.userName = event.target.value} defaultValue={item.userName}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>Пароль</Label>
                    <Col sm={9}>
                        <Input id="password" type={"text"} placeholder="Пароль" onChange={event => item.password = event.target.value} defaultValue={item.password}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="role" sm={3}>Роль</Label>
                    <Col sm={9}>
                        <Input id="role" type={"select"} placeholder="Роль" onChange={event => item.userRole = event.target.value} defaultValue={item.userRole}>
                            {
                                props.roles && props.roles.map(role => {
                                    return (
                                        <option key={'role-' + role} value={role} selected={item.userRole === role}>{role}</option>

                                    )
                                })
                            }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }} className={"action-buttons"}>
                        <Button color="secondary" onClick={save}>Сохранить</Button>
                        <Button color="secondary" onClick={handleClick}>Отменить</Button>
                    </Col>
                </FormGroup>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    roles: selectRoles(state)
})

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user) => dispatch(new UpdateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);