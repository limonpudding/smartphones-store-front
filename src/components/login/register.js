import React, {useState} from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {selectUserDetail} from "../../redux/selectors/all";
import {DoRegister} from "../../redux/actions/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const Register = (props) => {

    // TODO добавить сообщения об ошибке, при неудачной попытке регистрации

    const [user] = useState({
        userName: '',
        password: ''
    });

    const tryRegister = () => {
        props.register(user);
    }

    if (props.roles && props.roles.indexOf('USER') !== -1) {
        return <Redirect to={"/catalog"}/>;
    }

    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <h5>РЕГИСТРАЦИЯ</h5>
                <FormGroup>
                    <Input onChange={event => user.userName = event.target.value} type="login" name="login"
                           id="login" placeholder="Логин"/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={event => user.password = event.target.value} type="password" name="password"
                           id="password" placeholder="Пароль"/>
                </FormGroup>
                <Button onClick={tryRegister}>Зарегистрироваться</Button>
            </Form>
        </div>
    );
}
const mapStateToProps = state => ({
    userDetail: selectUserDetail(state),
    roles: selectUserDetail(state).roles
})

const mapDispatchToProps = dispatch => {
    return {
        register: (user) => dispatch(new DoRegister(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);