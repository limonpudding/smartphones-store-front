import React from "react";
import {Button, Form, FormGroup, Input} from "reactstrap";

const Register = () => {
    return (
        <div className={'content text-center auth-form ts-form-group-dark'}>
            <Form>
                <h5>РЕГИСТРАЦИЯ</h5>
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