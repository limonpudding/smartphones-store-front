import React, {useEffect, useState} from 'react';
import {
    Button, Col, FormGroup,
    Input, Label
} from "reactstrap";
import {selectBrands} from "../../../redux/selectors/all";
import {connect} from "react-redux";
import {EditSmartphone} from "../../../redux/actions/smartphones";

const ManageProduct = (props) => {

    useEffect(() => {
        if (props.smartphone) {
            setItem(Object.assign({}, props.smartphone));
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

                <FormGroup row>
                    <Label for="model" sm={3}>Модель</Label>
                    <Col sm={9}>
                        <Input id="model" placeholder="Модель" onChange={ event =>  item.modelName = event.target.value} defaultValue={item.modelName}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="brand" sm={3}>Бренд</Label>
                    <Col sm={9}>
                        <Input id="brand" type={"select"} placeholder="Бренд" onChange={event => item.brand = event.target.value} defaultValue={item.brand}>
                            {
                                props.brands && props.brands.map(brand => {
                                    return (
                                        <option key={'brand-' + brand.id} value={brand}>{brand.name}</option>
                                    )
                                })
                            }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="cpu" sm={3}>Процессор</Label>
                    <Col sm={9}>
                        <Input id="cpu" placeholder="Процессор" onChange={ event =>  item.cpu = event.target.value} defaultValue={item.cpu}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="gpu" sm={3}>Графический процессор</Label>
                    <Col sm={9}>
                        <Input id="gpu" placeholder="Графический процессор" onChange={ event =>  item.gpu = event.target.value} defaultValue={item.gpu}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="ram" sm={3}>Объём ОЗУ</Label>
                    <Col sm={9}>
                        <Input id="ram" placeholder="Объём ОЗУ" onChange={ event =>  item.ram = event.target.value} defaultValue={item.ram}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="rom" sm={3}>Объём ПЗУ</Label>
                    <Col sm={9}>
                        <Input id="rom" placeholder="Объём ПЗУ" onChange={ event =>  item.rom = event.target.value} defaultValue={item.rom}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="price" sm={3}>Цена</Label>
                    <Col sm={9}>
                        <Input id="price" placeholder="Цена" onChange={ event =>  item.price = event.target.value} defaultValue={item.price}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{size: 10, offset: 2}} className={"action-buttons"}>
                        <Button color="secondary" onClick={save}>Сохранить</Button>
                        <Button color="secondary" onClick={handleClick}>Отменить</Button>
                    </Col>
                </FormGroup>
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