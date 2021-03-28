import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from "reactstrap";
import {selectBooks} from "../../redux/selectors/books";
import {GetBooks} from "../../redux/actions/books";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {NavLink as kek} from "reactstrap";


const TopMenu = (props) => {

    const getAuthorsData = () => {
        let data = props.books.map(book => book.authors).flat();
        let uniqueAuthors = [];
        data.filter(function (author) {
            var i = uniqueAuthors.findIndex(item => item.id === author.id);
            if (i <= -1) {
                uniqueAuthors.push(author);
            }
            return null;
        });
        setAuthors(uniqueAuthors);
    }

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        props.getBooks();
        getAuthorsData();
    }, []);

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

const mapStateToProps = state => ({
    books: selectBooks(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);