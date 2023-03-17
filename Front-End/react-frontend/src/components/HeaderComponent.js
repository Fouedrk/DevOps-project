import React, { Component } from 'react'
import Buttons from "./ButtonLogin";
import {getUser, login, logout} from "../helpers/auth_helper";
import {callApi} from "../helpers/axios_helper";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    componentDidMount() {
        this.getUser();
    }

    login = () => {
        login();
    };

    callApi = () => {
        callApi()
            .then(response => {
                this.setState({ api: response.data });
                console.log('Api return successfully data, check in section - Api response');

            })
            .catch(error => {
                console.error(error);
            });
    };

    componentWillUnmount() {
        this.shouldCancel = true;
    }

    logout = () => {
        logout();
        {localStorage.clear()}

    };

    getUser = () => {
        getUser().then(user => {
            if (user) {
                console.log('User has been successfully loaded from store.');
                console.log(user.profile.preferred_username);
                localStorage.setItem('username', user.profile.preferred_username);


            } else {
                console.info('You are not logged in.');
            }

            if (!this.shouldCancel) {
                this.setState({ user });
            }
        });
    };

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm bgh navbar-dark justify-content-end ">
                            <Container>
                                <Navbar.Brand href="/">
                                    <img
                                        src="/sofia.png"
                                        width="200"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link className="text-white" href="/">Gestion des produits</Nav.Link>
                                    <Nav.Link className="text-white" href="#features">Gestion des commandes</Nav.Link>
                                    <Nav.Link className="text-white" href="#pricing">Gestion d'Inventaire</Nav.Link>
                                </Nav>

                            </Container>
                        <span className="ml-auto"></span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                            <ul className="navbar-nav text-right">
                                <li className="nav-item active">
                                    {localStorage.getItem('username')==null ? <ButtonLogin
                                        login={this.login}
                                        getUser={this.getUser}
                                        callApi={this.callApi}
                                    />:
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            Connecté en tant que: <a href="#login"> {localStorage.getItem('username')}</a>
                                        </Navbar.Text>
                                    </Navbar.Collapse> }
                                    <ButtonLogout
                                        logout={this.logout}
                                        getUser={this.getUser}
                                        callApi={this.callApi}
                                    />

                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>

            </div>
        )
    }
}

export default HeaderComponent
