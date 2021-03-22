import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";
import {selectBooks} from "../../redux/selectors/books";
import {GetBooks} from "../../redux/actions/books";
import {connect} from "react-redux";

const AuthorsBar = (props) => {

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
            <Navbar color="light" light expand="md">
                <NavbarBrand href="#">Authors</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {
                            authors.map(author => {
                                return (
                                    <NavItem>
                                        <NavLink href={`/author/${author.id}`}>{author.name}</NavLink>
                                    </NavItem>
                                )
                            })
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsBar);