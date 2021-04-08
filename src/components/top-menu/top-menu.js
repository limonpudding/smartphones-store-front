import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";
import {NavLink} from "react-router-dom";


const TopMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={"ts-header"}>
            <Navbar className={'navbar navbar-dark container'} light expand="md">
                <NavbarBrand href="#">Магазин TechSTORE</NavbarBrand>
                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/*Для простого пользователя*/}
                        <NavItem>
                            <NavLink to="/login">Вход</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register">Регистрация</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/catalog">Каталог</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/basket">Корзина</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/orders">Заказы</NavLink>
                        </NavItem>

                        {/*Для админки*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink to="/manage-users">Управление пользователями</NavLink>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <NavLink to="/manage-catalog">Управление каталогом</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/manage-brands">Управление брендами</NavLink>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <NavLink to="/manage-orders">Управление заказами</NavLink>*/}
                        {/*</NavItem>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopMenu;