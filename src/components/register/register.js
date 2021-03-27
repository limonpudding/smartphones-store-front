import React from "react";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";

const Register = () => {
    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <FormGroup>
                    <Input type="login" name="login" id="login" placeholder="Логин"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Пароль"/>
                </FormGroup>
                <Button>Регистрация</Button>
            </Form>
        </div>
    );
}

export default Register;