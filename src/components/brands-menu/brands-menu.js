import React, {useEffect} from 'react';
import {
    Nav,
    NavItem,
    NavLink, Row
} from "reactstrap";
import {connect} from "react-redux";
import {selectBrands} from "../../redux/selectors/brands";
import {GetBrands} from "../../redux/actions/brands";

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
                                <NavLink href={`/brand/${brand.id}`}>{brand.name}</NavLink>
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