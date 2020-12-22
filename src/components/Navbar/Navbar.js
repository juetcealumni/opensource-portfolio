import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import etceimage from '../../assets/images/etceimage.png';


function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={etceimage}
                    width="44"
                    height="44"
                    className="d-inline-block align-top"
                />{' '}
                Our Opensource Initiative
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 mb-3 mb-md-0" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>




    );
}

export default NavbarComponent;