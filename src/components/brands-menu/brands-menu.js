import React, {useEffect} from 'react';
import {
    Nav,
    NavItem,
    Row
} from "reactstrap";
import {NavLink as kek} from "reactstrap";
import {connect} from "react-redux";
import {selectBrands} from "../../redux/selectors/brands";
import {GetBrands} from "../../redux/actions/brands";
import {NavLink} from "react-router-dom";

const BrandsMenu = (props) => {

    useEffect(() => {
        props.getBrands();
    }, []);

    return (
        <div className={'right-card'}>
            <p>Бренд</p>
            <Nav vertical>
                {
                    props.brands && props.brands.map(brand => {
                        return (
                            <NavItem>
                                <kek> <NavLink to={`/catalog/${brand.id}`}>{brand.name}</NavLink></kek>
                            </NavItem>
                        )
                    })
                }
            </Nav>
        </div>
    );
}

const mapStateToProps = state => ({
    brands: selectBrands(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBrands: () => dispatch(new GetBrands())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsMenu);