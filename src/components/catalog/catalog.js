import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert} from "reactstrap";

import {GetBooks} from "../../redux/actions/books";
import {selectBooks} from "../../redux/selectors/books";

import BookCard from "../book-card/book-card";

const Catalog = (props) => {

    useEffect(() => {
        props.getBooks();
    }, []);

    return (
        <div className={'content'}>
            <Row xs={"2"}>
                {
                    props.books && props.books.map(book => {
                        return (
                            <BookCard key={`book-${book.id}`} book={book} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    books: selectBooks(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);