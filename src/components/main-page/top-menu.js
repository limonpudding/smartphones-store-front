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
import {selectUserDetail} from "../../redux/selectors/all";
import {connect} from "react-redux";
import {SetUserDetail} from "../../redux/actions/auth";


const TopMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const logout = () => {
        props.setUserDetail({
            userName: '',
            basic: '',
            role: 'GUEST'
        });
        sessionStorage.removeItem('userDetail');
    }

    return (
        <div className={"ts-header"}>
            <Navbar className={'navbar navbar-dark container'} light expand="md">
                <NavbarBrand href="#">Магазин TechSTORE</NavbarBrand>
                <NavbarToggler onClick={toggle}/>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            (!props.role || props.role === 'GUEST')
                            &&
                            <NavItem>
                                <NavLink to="/login">Вход</NavLink>
                            </NavItem>
                        }
                        {
                            (!props.role || props.role === 'GUEST')
                            &&
                            <NavItem>
                                <NavLink to="/register">Регистрация</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && (props.role === 'USER' || props.role === 'GUEST')
                            &&
                            <NavItem>
                                <NavLink to="/catalog">Каталог</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'USER'
                            &&
                            <NavItem>
                                <NavLink to="/basket">Корзина</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'USER'
                            &&
                            <NavItem>
                                <NavLink to="/orders">Заказы</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'ADMIN'
                            &&
                            <NavItem>
                                <NavLink to="/manage-catalog">Управление каталогом</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'ADMIN'
                            &&
                            <NavItem>
                                <NavLink to="/manage-brands">Управление брендами</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'ADMIN'
                            &&
                            <NavItem>
                                <NavLink to="/manage-users">Управление пользователями</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role === 'ADMIN'
                            &&
                            <NavItem>
                                <NavLink to="/manage-orders">Управление заказами</NavLink>
                            </NavItem>
                        }
                        {
                            props.role && props.role !== 'GUEST'
                            &&
                            <NavItem>
                                <NavLink to={"/login"} onClick={logout}>Выход</NavLink>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    userDetail: selectUserDetail(state),
    role: selectUserDetail(state).role
})

const mapDispatchToProps = dispatch => {
    return {
        setUserDetail: () => dispatch(new SetUserDetail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);