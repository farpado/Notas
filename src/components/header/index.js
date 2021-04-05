import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Block, Column } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import "../../styles/header.scss";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={LogoImage} />
                        </Link>
                        <p className="logo">CRIE SUAS NOTAS</p>
                    
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>

                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu"
                    active={openMenu.toString()}
                    onClick={() => setOpenMenu(!openMenu)} >
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                            <Column>
                                <Link to="/register" className="button is-white has-text-custom-blue">Register</Link>
                            </Column>
                            <Column>
                                <Link to="/login" className="button is-outlined is-custom-blue">Login</Link>
                            </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default Header;