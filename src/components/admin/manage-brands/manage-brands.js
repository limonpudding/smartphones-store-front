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
import {selectBrands} from "../../../redux/selectors/all";
import {AddBrand, GetBrands} from "../../../redux/actions/brands";
import ManageBrand from "./manage-brand";

const ManageBrands = (props) => {

    useEffect(() => {
        props.getBrands();
    }, []);

    const [editing, setEditing] = useState(false);
    const toggleEditing = () => setEditing(!editing);

    const [editingBrand, setEditingBrand] = useState();


    const edit = (id) => {
        setEditingBrand(props.brands.find(brand => brand.id === id));
        setEditing(true);
    }

    const add = () => {
        props.addBrand(item);
        props.getBrands();
    }

    const [item, setItem] = useState({
        name: ''
    });


    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Управление брендами:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Наименование бренда</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.brands && props.brands.map(brand => {
                                    return (
                                        <tr key={`smartphone-${brand.id}`}>
                                            <th scope="row">{brand.id}</th>
                                            <td>{brand.name}</td>
                                            <td onClick={() => edit(brand.id)}><strong className={'edit-icon'}>Изменить</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        <h4>Добавить новый бренд:</h4>
                        <InputGroup>
                            <Input placeholder="Наименование" onChange={ event =>  item.name = event.target.value}/>
                            <InputGroupAddon addonType="append" className={"action-buttons"}><Button onClick={add} color="secondary">Добавить</Button></InputGroupAddon>
                        </InputGroup>
                        {
                            editing ? <ManageBrand brand={editingBrand} toggle={toggleEditing} /> : null
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    brands: selectBrands(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBrands: () => dispatch(new GetBrands()),
        addBrand: (brand) => dispatch(new AddBrand(brand))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBrands);
