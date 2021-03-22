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

const GenresMenu = () => {

    const getGenresData = () => {
        fetch("/mock/books.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                let data = jsonData.map(book => book.genres).flat();
                let uniqueGenres = [];
                data.filter(function(genre){
                    var i = uniqueGenres.findIndex(item => item.id === genre.id);
                    if (i <= -1) {
                        uniqueGenres.push(genre);
                    }
                    return null;
                });
                setGenres(uniqueGenres);
            });
    }

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenresData();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <p>Genres</p>
            <Nav vertical>
                {
                    genres.map(genre => {
                        return (
                            <NavItem>
                                <NavLink href={`/genre/${genre.id}`}>{genre.name}</NavLink>
                            </NavItem>
                        )
                    })
                }
            </Nav>
        </div>
    )
}

export default GenresMenu;