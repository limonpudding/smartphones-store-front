import React, {useState} from "react";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {selectRole} from "../../redux/selectors/role";
import {DoLogin} from "../../redux/actions/auth";
import {useHistory} from "react-router";

const Login = (props) => {

    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    let history = useHistory();

    const tryLogin = () => {
        props.login(user);
        history.push("/catalog");
    }

    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <h5>ЛОГИН</h5>
                <FormGroup>
                    <Input onChange={event => user.userName =  event.target.value} type="login" name="login" id="login" placeholder="Логин"/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={event => user.password =  event.target.value} type="password" name="password" id="password" placeholder="Пароль"/>
                </FormGroup>
                <Button onClick={tryLogin}>Вход</Button>
            </Form>
        </div>

    );
}

const mapStateToProps = state => ({
    role: selectRole(state)
})

const mapDispatchToProps = dispatch => {
    return {
        login: (basic) => dispatch(new DoLogin(basic))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);