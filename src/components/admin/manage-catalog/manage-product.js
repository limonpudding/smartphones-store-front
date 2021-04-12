import React, {useEffect, useState} from 'react';
import {
    Button,
    Input, InputGroup,
    InputGroupAddon
} from "reactstrap";
import {selectBrands} from "../../../redux/selectors/all";
import {connect} from "react-redux";
import {EditSmartphone} from "../../../redux/actions/smartphones";

const ManageProduct = (props) => {

    useEffect(() => {
        if (props.smartphone) {
            setItem(props.smartphone);
        } else {
            props.toggle();
        }
    }, []);

    const [item, setItem] = useState({
        id: '',
        modelName: '',
        brand: '',
        cpu: '',
        gpu: '',
        ram: '',
        rom: '',
        price: ''
    });

    const handleClick = () => {
        props.toggle();
    };

    const save = () => {
        props.editSmartphone(item);
        props.toggle();
    }


    return (
        <div className="ts-modal">
            <div className="ts-modal-content">
                <h4>Редактирование смартфона:</h4>
                <InputGroup>
                    <Input placeholder="Модель" onChange={ event =>  item.modelName = event.target.value} defaultValue={item.modelName}/>
                    <Input type={"select"} placeholder="Бренд" onChange={event => item.brand = event.target.value} defaultValue={item.brand}>
                        {
                            props.brands && props.brands.map(brand => {
                                return (
                                    <option key={'brand-' + brand} value={brand} selected={item.brand === brand}>{brand.name}</option>
                                )
                            })
                        }
                    </Input>
                    <Input placeholder="Процессор" onChange={ event =>  item.cpu = event.target.value} defaultValue={item.cpu}/>
                    <Input placeholder="Графический процессор" onChange={ event =>  item.gpu = event.target.value} defaultValue={item.gpu}/>
                    <Input placeholder="Объём ОЗУ" onChange={ event =>  item.ram = event.target.value} defaultValue={item.ram}/>
                    <Input placeholder="Объём ПЗУ" onChange={ event =>  item.rom = event.target.value} defaultValue={item.rom}/>
                    <Input placeholder="Цена" onChange={ event =>  item.price = event.target.value} defaultValue={item.price}/>
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

const mapStateToProps = state => ({
    brands: selectBrands(state)
})

const mapDispatchToProps = dispatch => {
    return {
        editSmartphone: (smartphone) => dispatch(new EditSmartphone(smartphone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);