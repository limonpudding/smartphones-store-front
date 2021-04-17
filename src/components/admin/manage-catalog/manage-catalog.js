import React, {useState, useEffect} from "react";
import {
    Button,
    Col, FormGroup,
    Input, Label,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {selectSmartphones} from "../../../redux/selectors/all";
import {selectBrands} from "../../../redux/selectors/all";
import {AddSmartphone, GetSmartphones, RemoveSmartphone, SetSmartphones} from "../../../redux/actions/smartphones";
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

    const remove = (id) => {
        props.removeSmartphone(id);
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
                        <h2>Управление каталогом</h2>

                        <h4>Добавить смартфон в каталог:</h4>
                        <FormGroup row>
                            <Label for="model" sm={3}>Модель</Label>
                            <Col sm={9}>
                                <Input id="model" placeholder="Модель" onChange={ event =>  item.modelName = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="brand" sm={3}>Бренд</Label>
                            <Col sm={9}>
                                <Input id="brand" type={"select"} onChange={event => item.brand = JSON.parse(event.target.value)}>
                                    <option key={'brand-none'} />
                                    {
                                        props.brands && props.brands.map(brand => {
                                            return (
                                                <option key={'brand-' + brand.id} value={JSON.stringify(brand)}>{brand.name}</option>
                                            )
                                        })
                                    }
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="cpu" sm={3}>Процессор</Label>
                            <Col sm={9}>
                                <Input id="cpu" placeholder="Процессор" onChange={ event =>  item.cpu = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="gpu" sm={3}>Графический процессор</Label>
                            <Col sm={9}>
                                <Input id="gpu" placeholder="Графический процессор" onChange={ event =>  item.gpu = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="ram" sm={3}>Объём ОЗУ</Label>
                            <Col sm={9}>
                                <Input id="ram" placeholder="Объём ОЗУ" onChange={ event =>  item.ram = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="rom" sm={3}>Объём ПЗУ</Label>
                            <Col sm={9}>
                                <Input id="rom" placeholder="Объём ПЗУ" onChange={ event =>  item.rom = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="price" sm={3}>Цена</Label>
                            <Col sm={9}>
                                <Input id="price" placeholder="Цена" onChange={ event =>  item.price = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }} className={"action-buttons"}>
                                <Button onClick={add} color="secondary">Добавить</Button>
                            </Col>
                        </FormGroup>

                        <h4>Список товаров:</h4>
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
                                <th colSpan={2}>Действие</th>
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
                                            <td onClick={() => remove(smartphone.id)}><strong className={'delete-icon'}>Удалить</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
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
        removeSmartphone: (id) => dispatch(new RemoveSmartphone(id)),
        getBrands: () => dispatch(new GetBrands())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCatalog);
