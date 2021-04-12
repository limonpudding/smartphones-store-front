import React, {useEffect, useState} from 'react';
import {
    Button,
    Input, InputGroup,
    InputGroupAddon
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
                <InputGroup>
                    <Input type={"text"} placeholder="Имя пользователя" onChange={event => item.userName = event.target.value} defaultValue={item.userName}/>
                    <Input type={"text"} placeholder="Пароль" onChange={event => item.password = event.target.value} defaultValue={item.password}/>
                    <Input type={"select"} placeholder="Роль" onChange={event => item.userRole = event.target.value} defaultValue={item.userRole}>
                        {
                            props.roles && props.roles.map(role => {
                                return (
                                    <option key={'role-' + role} value={role} selected={item.userRole === role}>{role}</option>

                                )
                            })
                        }
                    </Input>
                    <InputGroupAddon addonType="append" className={"action-buttons"}>
                        <Button color="secondary" onClick={save}>Сохранить</Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append" className={"action-buttons"}>
                        <Button color="secondary" onClick={handleClick}>Отменить</Button>
                    </InputGroupAddon>
                </InputGroup>
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