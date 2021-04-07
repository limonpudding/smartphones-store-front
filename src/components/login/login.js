import React from "react";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";

const Login = () => {
    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <h5>ЛОГИН</h5>
                <FormGroup>
                    <Input type="login" name="login" id="login" placeholder="Логин"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Пароль"/>
                </FormGroup>
                <Button>Вход</Button>
            </Form>
        </div>
    );
}

export default Login;