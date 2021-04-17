import React, {useEffect, useState} from 'react';
import {
    Button, Col, FormGroup,
    Input, Label
} from "reactstrap";
import {connect} from "react-redux";
import {UpdateBrand} from "../../../redux/actions/brands";

const ManageBrand = (props) => {

    useEffect(() => {
        if (props.brand) {
            setItem(Object.assign({}, props.brand));
        } else {
            props.toggle();
        }
    }, []);

    const [item, setItem] = useState({
        id: '',
        name: ''
    });

    const handleClick = () => {
        props.toggle();
    };

    const save = () => {
        props.updateBrand(item);
        props.toggle();
    }


    return (
        <div className="ts-modal">
            <div className="ts-modal-content">

                <h4>Редактирование бренда:</h4>
                <FormGroup row>
                    <Label for="name" sm={3}>Наименование</Label>
                    <Col sm={9}>
                        <Input id="name" placeholder="Наименование" onChange={ event =>  item.name = event.target.value} defaultValue={item.name}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }} className={"action-buttons"}>
                        <Button color="secondary" onClick={save}>Сохранить</Button>
                        <Button color="secondary" onClick={handleClick}>Отменить</Button>
                    </Col>
                </FormGroup>
            </div>
        </div>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        updateBrand: (brand) => dispatch(new UpdateBrand(brand))
    }
}

export default connect(null, mapDispatchToProps)(ManageBrand);