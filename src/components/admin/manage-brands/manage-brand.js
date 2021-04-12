import React, {useEffect, useState} from 'react';
import {
    Button,
    Input, InputGroup,
    InputGroupAddon
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
                <InputGroup>
                    <Input placeholder="Наименование" onChange={ event =>  item.name = event.target.value} defaultValue={item.name}/>
                    <InputGroupAddon addonType="append" className={"action-buttons"}>
                        <Button color="secondary" onClick={save}>Сохранить</Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append" className={"action-buttons"}>
                        <Button color="secondary" onClick={handleClick}>Отменить</Button>
                    </InputGroupAddon>
                </InputGroup>
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