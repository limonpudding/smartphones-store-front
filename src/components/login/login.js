import React, {useState} from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";
import {selectUserDetail} from "../../redux/selectors/all";
import {DoLogin, SetUserDetail} from "../../redux/actions/auth";
import {Redirect} from "react-router";

const Login = (props) => {

    const [user] = useState({
        userName: '',
        password: ''
    });

    const tryLogin = () => {
        props.login(user);
    }

    return (

        props.userDetail.role && props.userDetail.role !== 'GUEST' ? <Redirect to={'/catalog'}/> :
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
        login: (basic) => dispatch(new DoLogin(basic)),
        setUserDetail: (detail) => dispatch(new SetUserDetail(detail))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);