import React, {useState, useEffect} from "react";
import {
    Button,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {selectSmartphones} from "../../../redux/selectors/all";
import {selectBrands} from "../../../redux/selectors/all";
import {AddSmartphone, GetSmartphones, SetSmartphones} from "../../../redux/actions/smartphones";
import {GetBrands} from "../../../redux/actions/brands";
import ManageProduct from "./manage-product";

const ManageCatalog = (props) => {

    useEffect(() => {
        props.getSmartphones();
        props.getBrands();
    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const [editing, setEditing] = useState(false);
    const toggleEditing = () => setEditing(!editing);

    const [editingProduct, setEditingProduct] = useState();

    const edit = (id) => {
        setEditingProduct(props.smartphones.find(smartphone => smartphone.id === id));
        setEditing(true);
    }

    const add = () => {
        props.addSmartphone(item);
        props.getSmartphones();
    }

    const [item, setItem] = useState({
        modelName: '',
        brand: '',
        cpu: '',
        gpu: '',
        ram: '',
        rom: '',
        price: ''
    });


    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Управление каталогом:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Модель</th>
                                <th>Брэнд</th>
                                <th>Процессор</th>
                                <th>Графический процессор</th>
                                <th>Объём ОЗУ</th>
                                <th>Объём ПЗУ</th>
                                <th>Цена</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.smartphones && props.smartphones.map(smartphone => {
                                    return (
                                        <tr key={`smartphone-${smartphone.id}`}>
                                            <th scope="row">{smartphone.id}</th>
                                            <td>{smartphone.modelName}</td>
                                            <td>{smartphone.brand.name}</td>
                                            <td>{smartphone.cpu}</td>
                                            <td>{smartphone.gpu}</td>
                                            <td>{smartphone.ram}</td>
                                            <td>{smartphone.rom}</td>
                                            <td>{smartphone.price}</td>
                                            <td onClick={() => edit(smartphone.id)}><strong className={'edit-icon'}>Изменить</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        <h4>Добавить смартфон в каталог:</h4>
                        <InputGroup>
                            <Input placeholder="Модель" onChange={ event =>  item.modelName = event.target.value}/>
                            <Input type={"select"} placeholder="Бренд" onChange={event => item.brand = event.target.value}>
                                {
                                    props.brands && props.brands.map(brand => {
                                        return (
                                            <option key={'role-' + brand} value={brand} selected={item.brand === brand}>{brand.name}</option>
                                        )
                                    })
                                }
                            </Input>
                            <Input placeholder="Процессор" onChange={ event =>  item.cpu = event.target.value}/>
                            <Input placeholder="Графический процессор" onChange={ event =>  item.gpu = event.target.value}/>
                            <Input placeholder="Объём ОЗУ" onChange={ event =>  item.ram = event.target.value}/>
                            <Input placeholder="Объём ПЗУ" onChange={ event =>  item.rom = event.target.value}/>
                            <Input placeholder="Цена" onChange={ event =>  item.price = event.target.value}/>
                            <InputGroupAddon addonType="append" className={"action-buttons"}>
                                <Button onClick={add} color="secondary">Добавить</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        {
                            editing ? <ManageProduct smartphone={editingProduct} toggle={toggleEditing} /> : null
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    smartphones: selectSmartphones(state),
    brands: selectBrands(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getSmartphones: () => dispatch(new GetSmartphones()),
        addSmartphone: (smartphone) => dispatch(new AddSmartphone(smartphone)),
        getBrands: () => dispatch(new GetBrands())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCatalog);
