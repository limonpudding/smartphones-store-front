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
        <div>
            <Navbar className={'navbar navbar-dark ts-header'} light expand="md">
                <NavbarBrand href="#">Магазин TechSTORE</NavbarBrand>
                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
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
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopMenu;