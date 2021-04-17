import React, {useState, useEffect} from "react";
import {
    Button,
    Col, FormGroup,
    Input, Label,
    Row,
    Table
} from "reactstrap";
import {connect} from "react-redux";
import {selectRoles, selectUsers} from "../../../redux/selectors/all";
import {AddUser, GetUsers, RemoveUser} from "../../../redux/actions/users";
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

    const remove = (id) => {
        props.removeUser(id);
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
                        <h2>Управление пользователями</h2>

                        <h4>Добавить нового пользователя:</h4>
                        <FormGroup row>
                            <Label for="userName" sm={3}>Имя пользователя</Label>
                            <Col sm={9}>
                                <Input id="userName" placeholder="Имя пользователя" onChange={ event =>  item.userName = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={3}>Пароль</Label>
                            <Col sm={9}>
                                <Input id="password" placeholder="Пароль" onChange={ event =>  item.password = event.target.value}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="role" sm={3}>Роль</Label>
                            <Col sm={9}>
                                <Input id="role" type={"select"} onChange={event => item.userRole = event.target.value} defaultValue={item.userRole}>
                                    <option key={'role-none'} />
                                    {
                                        props.roles && props.roles.map(role => {
                                            return (
                                                <option key={'role-' + role} value={role} selected={item.userRole === role}>{role}</option>

                                            )
                                        })
                                    }
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }} className={"action-buttons"}>
                                <Button onClick={add} color="secondary">Добавить</Button>
                            </Col>
                        </FormGroup>

                        <h4>Список пользователей:</h4>
                        <Table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя пользователя</th>
                                <th>Роль</th>
                                <th colSpan={2}>Действие</th>
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
                                            <td onClick={() => remove(user.id)}><strong className={'delete-icon'}>Удалить</strong></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
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
        addUser: (user) => dispatch(new AddUser(user)),
        removeUser: (id) => dispatch(new RemoveUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
