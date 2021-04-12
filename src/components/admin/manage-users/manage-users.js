import React, {useState, useEffect} from "react";
import {
    Button,
    Col, DropdownItem, DropdownMenu, DropdownToggle,
    Input,
    InputGroup,
    InputGroupAddon, InputGroupButtonDropdown,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {selectRoles, selectUsers} from "../../../redux/selectors/all";
import {AddUser, GetUsers} from "../../../redux/actions/users";
import {GetRoles} from "../../../redux/actions/roles";
import ManageUser from "./manage-user";

const ManageUsers = (props) => {

    useEffect(() => {
        props.getUsers();
        props.getRoles();
    },[]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const [editing, setEditing] = useState(false);
    const toggleEditing = () => setEditing(!editing);

    const [editingUser, setEditingUser] = useState();



    const edit = (id) => {
        setEditingUser(props.users.find(user => user.id === id));
        setEditing(true);
    }

    const add = () => {
        props.addUser(item);
        props.getUsers();
    }

    const [item] = useState({
        userName: '',
        password: '',
        userRole: ''
    });


    return (
        <Row>
            <Col xs="12" sm="12">
                <div className={'content'}>
                    <div className={'basket-card'}>
                        <h2>Управление пользователями:</h2>
                        <Table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя пользователя</th>
                                <th>Роль</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.users && props.users.map(user => {
                                    return (
                                        <tr key={`user-${user.id}`}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.userName}</td>
                                            <td>{user.userRole}</td>
                                            <td onClick={() => edit(user.id)}><strong className={'edit-icon'}>Изменить</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                        <h4>Добавить нового пользователя:</h4>
                        <InputGroup>
                            <Input placeholder="Имя пользователя" onChange={ event =>  item.userName = event.target.value}/>
                            <Input placeholder="Пароль" onChange={ event =>  item.password = event.target.value}/>
                            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                                <DropdownToggle caret>{item.userRole ? item.userRole : 'Роль'}</DropdownToggle>
                                <DropdownMenu>
                                    {
                                        props.roles && props.roles.map(role => {
                                            return (
                                                <DropdownItem onClick={() => item.userRole = role} key={`role-${role}`}>{role}</DropdownItem>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </InputGroupButtonDropdown>
                            <InputGroupAddon addonType="append" className={"action-buttons"}><Button onClick={add} color="secondary">Добавить</Button></InputGroupAddon>
                        </InputGroup>
                        {
                            editing ? <ManageUser user={editingUser} toggle={toggleEditing} /> : null
                        }
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    users: selectUsers(state),
    roles: selectRoles(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(new GetUsers()),
        getRoles: () => dispatch(new GetRoles()),
        addUser: (user) => dispatch(new AddUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
