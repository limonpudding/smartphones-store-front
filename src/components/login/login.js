import React, {useState} from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";
import {selectUserDetail} from "../../redux/selectors/all";
import {DoLogin} from "../../redux/actions/auth";
import {Redirect} from "react-router";

const Login = (props) => {

    // TODO добавить сообщения об ошибке, при неудачной попытке авторизации

    const [user] = useState({
        userName: '',
        password: ''
    });

    const tryLogin = () => {
        props.login(user);
    }

    if (props.userDetail.role && props.userDetail.role === 'USER') {
        return <Redirect to={"/catalog"}/>;
    }

    if (props.userDetail.role && props.userDetail.role === 'ADMIN') {
        return <Redirect to={"/manage-catalog"}/>;
    }

    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <h5>ЛОГИН</h5>
                <FormGroup>
                    <Input onChange={event => user.userName = event.target.value} type="login" name="login"
                           id="login" placeholder="Логин"/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={event => user.password = event.target.value} type="password" name="password"
                           id="password" placeholder="Пароль"/>
                </FormGroup>
                <Button onClick={tryLogin}>Вход</Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    userDetail: selectUserDetail(state)
})

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(new DoLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);